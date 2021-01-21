import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateLendingItem1611240106987
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'items',
        columns: [
          {
            name: 'lending_id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'copy_id',
            type: 'varchar',
            isPrimary: true,
          },
        ],
        foreignKeys: [
          {
            name: 'LendingItem',
            columnNames: ['lending_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'lendings',
          },
          {
            name: 'CopyItem',
            columnNames: ['copy_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'copies',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('items');
  }
}
