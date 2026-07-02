import { PrismaClient,Role } from "@prisma/client";


const prisma = new PrismaClient();

async function main() {
  console.log("Starting database seed");

  // removing existing data 
  await prisma.fieldUpdate.deleteMany();
  await prisma.field.deleteMany();
  await prisma.user.deleteMany();

  // Creating admin user
  const admin = await prisma.user.create({
    data: {
      fullName: "Amani Arnold",
      email: "admin@smartseason.com",
      password: "amani123",
      role: Role.ADMIN,
    },
  });

  console.log("Admin created");

  // Creating first field
  const maizeField = await prisma.field.create({
    data: {
      name: "North Farm",
      crop: "Maize",
      location: "Nakuru",
      acreage: 12.5,
      status: "Healthy",
      ownerId: admin.id,
    },
  });

  // Creating second field
  const tomatoField = await prisma.field.create({
    data: {
      name: "South Farm",
      crop: "Tomatoes",
      location: "Kiambu",
      acreage: 6.8,
      status: "Monitoring",
      ownerId: admin.id,
    },
  });

  console.log("Fields created");

  await prisma.fieldUpdate.createMany({
    data: [
      {
        notes: "Crop growing well.",
        cropStage: "Vegetative",
        moisture: 68,
        temperature: 26,
        humidity: 71,
        fieldId: maizeField.id,
        userId: admin.id,
      },
      {
        notes: "Irrigation completed.",
        cropStage: "Flowering",
        moisture: 74,
        temperature: 24,
        humidity: 77,
        fieldId: tomatoField.id,
        userId: admin.id,
      },
    ],
  });

  console.log("Field updates created");
  console.log("Database seeded successfully.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });