import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDatabase1638989264492 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createDatabase('neucarz', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropDatabase('neucarz', true);
  }
}
