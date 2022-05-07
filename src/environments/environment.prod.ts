import { MockItemsService } from "src/app/Components/services/mock-items.service";

export const environment = {
  production: true,
  providers: [
    { provide: MockItemsService, useClass: MockItemsService },
],
};
