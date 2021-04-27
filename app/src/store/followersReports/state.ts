import UserUtils from 'src/utils/user/user';
import {UserInterface} from 'src/types/user/user';

export interface ExampleStateInterface {
  columns: Record<string, unknown>[];
}

function state(): ExampleStateInterface {
  return {
    columns: [
      {
        name: 'author',
        label: 'Автор',
        field: 'author',
        format: (val:UserInterface) => UserUtils.getShortFio(val),
        sortable: true,
      },
      {
        name: 'name',
        label: 'Название',
        field: 'name',
        sortable: true,
      },
      {
        name: 'status',
        label: 'Статус',
        field: 'status',
        sortable: true,
      },
      {
        name: 'createdDate',
        label: 'Дата создания',
        field: 'createdDate',
        sortable: true,
      },
      {
        name: 'actions',
        label: 'Действия',
        field: 'actions',
      }
    ]
  }
}

export default state;
