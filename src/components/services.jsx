import style from '@/components/Services.module.css'

export default function Services() {
  return(
    <div className={style.srvc}>
      <div className={style.srvc_title}>
        <h2>Услуги</h2>
        <ul>
          <li><p>Тарифы на услуги по обеспечению<br />контроля доступа на территорию<br />VISMA на 2022 год</p><button>PDF</button></li>
          <li><p>Условия определения цены<br />договора и тарифы на работы</p><button>PDF</button></li>
          <li><p>Договор перевалки<br />(типовая форма)</p><button>PDF</button></li>
        </ul>
      </div>
      <div className={style.srvc_grid}>
        <div className="srvc_grid_block">
          <h4>услуги</h4>
          <h3>Хранение грузов</h3>
        </div>
        <div className="srvc_grid_block">
          <h4>услуги</h4>
          <h3>Складские операции</h3>
        </div>
        <div className="srvc_grid_block">
          <h4>услуги</h4>
          <h3>Буксировка / сопровождение судов</h3>
        </div>
        <div className="srvc_grid_block">
          <h4>услуги</h4>
          <h3>Швартовые операции</h3>
        </div>
        <div className="srvc_grid_block">
          <h4>услуги</h4>
          <h3>Агентское обслуживание судов</h3>
        </div>
        <div className="srvc_grid_block">
          <h4>услуги</h4>
          <h3>Погрузочно-разгрузочная деятельность</h3>
        </div>
      </div>
    </div>
  )
}