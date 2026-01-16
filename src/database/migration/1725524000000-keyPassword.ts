import { MigrationInterface, QueryRunner } from 'typeorm'

export class KeyPassword1742835643810 implements MigrationInterface {
  name = 'KeyPassword1742835643810'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "ConnectionEntity" ADD COLUMN "keyPassword" varchar`)
    await queryRunner.query(`ALTER TABLE "HistoryConnectionEntity" ADD COLUMN "keyPassword" varchar`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "HistoryConnectionEntity" DROP COLUMN "keyPassword"`)
    await queryRunner.query(`ALTER TABLE "ConnectionEntity" DROP COLUMN "keyPassword"`)
  }
}
