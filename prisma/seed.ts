import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
    console.log("🌱 Starting database seeding...");

    // Create admin user
    const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com";
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

    const hashedAdminPassword = await bcrypt.hash(adminPassword, 12);

    const admin = await prisma.user.upsert({
        where: { email: adminEmail },
        update: {},
        create: {
            name: "Administrator",
            email: adminEmail,
            password: hashedAdminPassword,
            role: "ADMIN",
        },
    });

    console.log("✅ Admin user created:", admin.email);

    // Create sample products
    const products = [
        { name: "Fresh Bananas (1 lb)", price: 1.99, quantity: 100 },
        { name: "Organic Apples (2 lbs)", price: 4.99, quantity: 75 },
        { name: "Whole Milk (1 gallon)", price: 3.49, quantity: 50 },
        { name: "Bread - Whole Wheat", price: 2.99, quantity: 30 },
        { name: "Free Range Eggs (12 count)", price: 4.99, quantity: 40 },
        { name: "Organic Spinach (5 oz)", price: 3.99, quantity: 25 },
        { name: "Ground Beef (1 lb)", price: 6.99, quantity: 20 },
        { name: "Chicken Breast (2 lbs)", price: 8.99, quantity: 15 },
        { name: "Cheddar Cheese (8 oz)", price: 4.49, quantity: 35 },
        { name: "Pasta - Spaghetti", price: 1.99, quantity: 60 },
        { name: "Tomato Sauce (24 oz)", price: 2.49, quantity: 45 },
        { name: "Olive Oil (16.9 oz)", price: 7.99, quantity: 20 },
        { name: "Rice - Jasmine (2 lbs)", price: 3.99, quantity: 30 },
        { name: "Black Beans (15 oz can)", price: 1.49, quantity: 50 },
        { name: "Avocados (3 count)", price: 3.99, quantity: 40 },
        { name: "Orange Juice (64 oz)", price: 4.99, quantity: 25 },
        { name: "Greek Yogurt (32 oz)", price: 5.99, quantity: 20 },
        { name: "Salmon Fillet (1 lb)", price: 12.99, quantity: 10 },
        { name: "Sweet Potatoes (2 lbs)", price: 2.99, quantity: 35 },
        { name: "Broccoli Crowns (1 lb)", price: 2.49, quantity: 30 },
    ];

    for (const product of products) {
        const existingProduct = await prisma.product.findFirst({
            where: { name: product.name },
        });

        if (!existingProduct) {
            await prisma.product.create({
                data: product,
            });
        }
    }

    console.log("✅ Sample products created");

    // Create a sample customer
    const customerPassword = await bcrypt.hash("customer123", 12);

    const customer = await prisma.user.upsert({
        where: { email: "customer@example.com" },
        update: {},
        create: {
            name: "John Doe",
            email: "customer@example.com",
            password: customerPassword,
            address: "123 Main St, Anytown, USA 12345",
            contactNumber: "+1 (555) 123-4567",
            role: "CUSTOMER",
        },
    });

    console.log("✅ Sample customer created:", customer.email);

    console.log("🎉 Database seeding completed!");
}

main()
    .catch((e) => {
        console.error("❌ Error during seeding:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
