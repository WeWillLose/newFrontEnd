import {User, UserInterface} from 'src/types/user/user';

export interface AdminStateInterface {
  users: UserInterface[],
  editedUser: UserInterface,
  defaultUser: UserInterface,
  columns: Array<Record<string, unknown>>
}

function state(): AdminStateInterface {
  return {
    users: [],
    editedUser: {
      id: null,
      chairman: null,
      roles: [],
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      middleName: ''
    },
    defaultUser: {
      id: null,
      roles: [],
      chairman: null,
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      middleName: ''
    },
    columns: [
      {
        name: 'username',
        required: true,
        label: 'Логин',
        align: 'left',
        field: 'username'
      },
      {
        name: 'firstName',
        align: 'center',
        label: 'Имя',
        field: 'firstName',
      },
      {
        name: 'lastName',
        align: 'center',
        label: 'Фамилия',
        field: 'lastName',
      },
      {
        name: 'middleName',
        align: 'center',
        label: 'Отчество',
        field: 'middleName',
        style: 'width:100px'
      },
      {
        name: 'roles',
        align: 'center',
        label: 'Роли',
        field: 'roles',
        style: 'width:100px'
      },
      {
        name: 'chairman',
        align: 'center',
        label: 'Председатель',
        field: 'chairman',
        style: 'width:100px'
      },
      {
        name: 'actions',
        align: 'center',
        label: 'Действия',
        field: 'actions',
        style: 'width:100px'
      }
    ]
  }
}

export default state;
