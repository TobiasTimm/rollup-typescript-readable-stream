import { createConnection } from "mysql";

try {
  createConnection("This will not work");
} catch (error) {
  console.error(error);
}
