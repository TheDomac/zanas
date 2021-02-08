import { Migration } from '@mikro-orm/migrations';

export class Migration20210208083624 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" drop constraint "user_username_unique";');
    this.addSql('alter table "user" drop column "username";');
  }

}
