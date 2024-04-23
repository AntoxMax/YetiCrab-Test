import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCommentDto } from './comment.dto';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  async create(createCommentDto: CreateCommentDto) {
    return await this.prisma.comment.create({
      data: {
        content: createCommentDto.content,
        applicationId: createCommentDto.applicationId,
      },
    });
  }

  async getById(id: number) {
    return this.prisma.comment.findMany({
      where: {
        applicationId: id,
      },
    });
  }

  async update(id: number, createCommentDto: CreateCommentDto) {
    const comment = await this.prisma.comment.update({
      where: {
        id: id,
      },
      data: {
        content: createCommentDto.content,
      },
    });

    return comment.id;
  }

  async remove(id: number) {
    this.prisma.comment.delete({ where: { id: id } });
    return `comment with id${id} was deleted`;
  }
}
