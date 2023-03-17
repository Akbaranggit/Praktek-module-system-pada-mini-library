class Table {
  constructor(init) {
    this.init = init;
  }
  headerTabel(dataHeader) {
    let tagbukaHeader = "<thead><tr>";
    let tagtutuphader = "</tr></thead>";
    dataHeader.forEach((data) => {
      tagbukaHeader += `<th>${data}</th>`;
    });
      return (tagbukaHeader + tagtutuphader);
  }
  bodyTabel(dataBody) {
    let tagbukaBody = "<tbody class='table-group-divider'>";
    let tagtutupBody = "</tbody>";
    dataBody.forEach((tes) => {
      tagbukaBody += `
        <tr>
          <td>${tes[0]}</td>
          <td>${tes[1]}</td>
          <td>${tes[2]}</td>
        </tr>
      `;
    });
    return (tagbukaBody + tagtutupBody);
  }
  gabung(element) {
    let akhirtable =
      "<table class='table table-bordered table-hover'>" +
      this.headerTabel(this.init.columns) +
      this.bodyTabel(this.init.data) +
      "</table>";
    element.innerHTML = akhirtable;
  }
}
export default Table;
