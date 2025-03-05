import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const connectDB = async (): Promise<void> => {
    try {
        await prisma.$connect();
        console.log('✅ Connected to PostgreSQL with Prisma.');
    } catch (error) {
        console.error('❌ Prisma connection failed:', error);
        process.exit(1);
    }
};

export default prisma;
