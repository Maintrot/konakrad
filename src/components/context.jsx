import style from '@/components/Context.module.css'
import VectorStrelkaAlter from "@/assets/VectorStrelkaAlter"

export default function Context() {
  return(
    <div className={style.context}>
      <div className={style.context_way}>
      <h3>Главная</h3><VectorStrelkaAlter className='strelka_alter'/><h3>Клиентам</h3><VectorStrelkaAlter/><h3>Заявка и перечень документов для заключения договоров</h3>
      </div>
      <div className={style.context_title}>
        <h1>Заявка и перечень документов для заключения<br />договоров</h1>
      </div>
      <div className={style.context_str}>
        <p>Для рассмотрения возможности заключения договора контрагент должен предоставить следующие документы:</p>
        <ul>
          <li>заявку (оферту) на имя генерального директора VISMA Technology, которая подается на фирменном бланке<br />организации и должна содержать сведения о виде работ и услуг, на которые контрагент предлагает заключить договор,<br />номенклатуре груза и общем объеме на год с разбивкой по месяцам.</li>
        </ul>
      </div>
      <div className={style.context_str}>
        <p>Для резидентов РФ (документы должны быть заверены подписью руководителя и печатью организации):</p>
        <ul>
          <li>копию выписки из ЕГРЮЛ (выданной не позднее одного месяца до даты заключения договора);</li>
          <li>копии учредительных документов (устава, положения);</li>
          <li>копию протокола или выписки из протокола о назначении исполнительного органа;</li>
          <li>копию свидетельства о государственной регистрации;</li>
          <li>копию приказа о назначении лица, действующего на основании положения;</li>
          <li>копию доверенности представителя;</li>
          <li>копию свидетельства о постановке на учет в качестве налогоплательщика;</li>
          <li>заполненную карточку контрагента, заверенную подписью и печатью руководителя организации и главного бухгалтера<br />и содержащую следующую информацию:</li>
        </ul>
        <ul className={style.context_str_num}>
          <li>Юридический адрес контрагента;</li>
          <li>Фактический адрес контрагента;</li>
          <li>Банковские реквизиты контрагента;</li>
          <li>Контактная информация: номер факса, адрес электронной почты и контактные лица с указанием номеров телефонов.</li>
        </ul>
      </div>
      <div className={style.context_str}>
        <p>Для нерезидентов РФ (документы должны быть предоставлены с нотариально заверенным переводом на русский язык):</p>
        <ul>
          <li>выписка из Торгового реестра страны происхождения компании-контрагента (о благонадежности компании);</li>
          <li>учредительные документы и документы регистрации фирмы (копии);</li>
          <li>подтверждение полномочий лица на право подписания договора, нотариально заверенная доверенность с апостилем,<br />либо выписка из протокола о назначении (избрании) на должность;</li>
          <li>заполненную карточку контрагента, заверенную подписью и печатью руководителя организации и содержащую<br />следующую информацию:</li>
        </ul>
        <ul className={style.context_str_num}>
          <li>Юридический адрес контрагента;</li>
          <li>Фактический адрес контрагента;</li>
          <li>Банковские реквизиты контрагента;</li>
          <li>Контактная информация: номер факса, адрес электронной почты и контактные лица с указанием номеров телефонов.</li>
        </ul>
      </div>
    </div>
  )
}