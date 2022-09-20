import { User, UserDocument } from 'src/schemas/user.schema';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { hashSync, genSaltSync } from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const salt = genSaltSync(10);
    createUserDto.password = hashSync(createUserDto.password, salt);
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }

  findAll() {
    return `This action returns all users`;
  }

  async findUser(username: string): Promise<User> {
    return this.userModel.findOne({ username: username }).exec();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
