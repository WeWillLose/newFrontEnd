import {ReportTableStateInterface} from 'src/store/report/types';

function state(): ReportTableStateInterface {
  return {
    name:'experience',
    editedIndex: -1,
    editedItem: {
      name: "",
      application: "",
      level: "",
      score: 0,
    },
    defaultItem: {
      name: "",
      application: "",
      level: "",
      score: 0,
    },
    columns: [
      {
        name: "name",
        label: "Название мероприятия, издания",
        align: "left",
        field:"name"
      },
      {
        name: "level",
        label: "Уровень",
        align: "center",
        field:"level"
      },
      {
        name: "application",
        label: "Тема выступления, публикации",
        align: "center",
        field:"application"
      },
      {
        name: "score",
        align: "center",
        label: "Баллы",
        field: "score",
        style: "width:100px"
      },
      {
        name: "actions",
        label: "Actions",
        field: "actions",
        align: "center",
      },
    ],
    rows: [
    ],
    defaultRows: [

    ],
  }
}

export default state;
