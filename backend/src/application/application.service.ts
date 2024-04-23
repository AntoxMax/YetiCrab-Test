import { Injectable } from '@nestjs/common';
import { Status } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateApplicationDto, UpdateApplicationDto } from './application.dto';

@Injectable()
export class ApplicationService {
  constructor(private prisma: PrismaService) {}

  async getFilteredApplication(
    finished: string = '',
    carriers: string,
    customers: string,
    orderBy: `asc` | `desc` = `asc`,
    searchById: number | undefined = undefined,
  ) {
    if (searchById) {
      return this.prisma.application.findMany({
        where: {
          id: searchById,
        },
        include: {
          Carrier: {
            select: {
              name: true,
              phone: true,
              ati: true,
            },
          },
          Customer: {
            select: {
              name: true,
            },
          },
        },
      });
    }

    let carriersId: number[];
    let customersId: number[];

    if (customers) {
      customersId = customers.split(',').map((item) => {
        return +item;
      });
    }

    if (carriers) {
      carriersId = carriers.split(',').map((item) => {
        return +item;
      });
    }

    return this.prisma.application.findMany({
      where: {
        NOT: {
          status: finished === 'false' ? Status.FINISH : undefined,
        },
        customerId: { in: customersId },
        carrierId: { in: carriersId },
      },
      orderBy: {
        createdAt: orderBy ? orderBy : 'asc',
      },
      include: {
        Carrier: {
          select: {
            name: true,
            phone: true,
            ati: true,
          },
        },
        Customer: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async getAll() {
    return this.prisma.application.findMany({
      include: {
        Carrier: {
          select: {
            name: true,
            phone: true,
          },
        },
        Customer: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: `asc`,
      },
    });
  }

  async getById(id: number) {
    return this.prisma.application.findUnique({
      where: {
        id: id,
      },
      include: {
        Carrier: {
          select: {
            name: true,
            phone: true,
          },
        },
        Customer: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async createApplication(ApplicationData: CreateApplicationDto) {
    const application = await this.prisma.application.create({
      data: {
        Carrier: {
          connect: {
            id: ApplicationData.carrierId,
          },
        },
        Customer: {
          connect: {
            id: ApplicationData.customerId,
          },
        },
      },
    });

    return application.id;
  }

  async updateApplication(id: number, ApplicationData: UpdateApplicationDto) {
    const application = await this.prisma.application.update({
      where: {
        id: id,
      },
      data: {
        status: ApplicationData.status,
        customerId: ApplicationData.customerId,
        carrierId: ApplicationData.carrierId,
      },
    });

    return application;
  }

  async deleteApplication(id: number) {
    const comments = await this.prisma.comment.findMany({
      where: {
        applicationId: id,
      },
    });

    await Promise.all(
      comments.map((comment) =>
        this.prisma.comment.delete({ where: { id: comment.id } }),
      ),
    );

    return this.prisma.application.delete({ where: { id } });
  }
}
