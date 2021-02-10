export class List {
  constructor(
    private id: number,
    private titel: string,
    private todoList: TodoList[],
    private benutzerList: BenutzerList[],
  ) { }
}

export class TodoList {
  constructor(
    private id: number,
    private titel: string,
    private text: string,
    private erledigt?: boolean,
  ) { }
}

export class BenutzerList {
  constructor(
    private id: number,
    private name: string,
  ) { }
}
