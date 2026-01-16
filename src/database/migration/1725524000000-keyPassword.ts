import { MigrationInterface, QueryRunner } from 'typeorm'

export class KeyPassword1725524000000 implements MigrationInterface {
  name = 'KeyPassword1725524000000'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "ConnectionEntity" ADD COLUMN "keyPassword" varchar`)
    await queryRunner.query(`ALTER TABLE "HistoryConnectionEntity" ADD COLUMN "keyPassword" varchar`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "HistoryConnectionEntity" DROP COLUMN "keyPassword"`)
    await queryRunner.query(`ALTER TABLE "ConnectionEntity" DROP COLUMN "keyPassword"`)
  }
}
