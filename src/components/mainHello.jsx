import VectorStrelka from "@/assets/VectorStrelka"

export default function MainHello() {
  return(
    <div className="main">
      <div className="main_title">
        <h1>Тавимский морской<br />порт VISMA</h1>
        <p>Vel posuere nibh odio placerat massa vel tellus<br />tortor. Varius eget nunc scelerisque etiam felis<br />facilisi ante viverra sem. Nunc eros elementum.</p>
        <div className="vecwork"><h4>о компании</h4><div className="vecwork_circle"><VectorStrelka/></div></div>
      </div>
      <div className="main_grid">
        <div className="main_grid_block">
          <h4>услуги</h4>
          <h3>Погрузочно-разгрузочная<br />деятельность</h3>
        </div>
        <div className="main_grid_block">
          <h4>услуги</h4>
          <h3>Хранение<br />грузов</h3>
        </div>
        <div className="main_grid_block">
          <h4>услуги</h4>
          <h3>Складские<br />операции</h3>
        </div>
        <div className="main_grid_block">
          <h4>услуги</h4>
          <h3>Швартовые<br />операции</h3>
        </div>
      </div>
    </div>
  )
}