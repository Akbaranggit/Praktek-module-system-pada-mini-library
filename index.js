import Table from "./komponen/skemaTabel.js";
import { judul, isi } from "./komponen/object.js";

const table = new Table({
  columns: [...judul], //...judul = spread
  data: [...isi],
});
const jalankan = document.getElementById("hasil");
table.gabung(jalankan);