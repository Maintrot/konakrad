export default function InputCreate() {
  return(
    <div className="inpcre">
      <div className="inpcre_way">
        <h3>Главная Клиентам Запрос ставки и условий погрузочно-<br />разгрузочных работ</h3>
      </div>
      <div className="inpcre_title">
        <h1>Запрос ставки и условий погрузочно-разгрузочных работ</h1>
      </div>
      <div className="inpcre_itemform">
        <form action="">
          <label htmlFor="">Наименование груза *</label>
          <input type="text" />
          <label htmlFor=""> </label>
          <input type="text" />
          <label htmlFor=""></label>
          <input type="text" />
          <label htmlFor=""></label>
          <input type="text" />
          <label htmlFor="">Пункт назначения перевозки</label>
          <input type="text" />
          <label htmlFor="">Период поступления груза к перевалке</label>
          <input type="text" />
          <label htmlFor="">Груз поступает в порт</label>
          <input type="text" />
          <label htmlFor="">Груз отправляется из порта</label>
          <input type="text" />
          <label htmlFor="">Размер судовой партии</label>
          <input type="text" />
          <label htmlFor="">Опасность груза (класс)</label>
          <input type="text" />
          <label htmlFor="">Дополнительная информация о грузе:</label>
          <input type="text" />
          <label htmlFor="">Прикрепить файл</label>
          <input type="text" />
        </form>
      </div>
      <div className="inpcre_sayform">
        <h1>Просим сообщить:</h1>
        <form action="">
          <input type="radio" /><p>Ставку ПРР</p>
          <input type="radio" /><p>Срок технологического накопления груза</p>
          <input type="radio" /><p>Ставку хранения груза сверх срока технологического накопления</p>
          <input type="radio" /><p>Возможность приёма и перевалки груза в указанные сроки</p>
        </form>
      </div>
      <div className="inpcre_callform">
        <h1>Информация для обратной связи:</h1>
          <label htmlFor="">Имя, фамилия</label>
          <input type="text" />
          <label htmlFor="">Название компании *</label>
          <input type="text" />
          <label htmlFor="">Номер телефона/факса</label>
          <input type="text" />
          <label htmlFor="">Адрес эл. почты *</label>
          <input type="text" />
      </div>
      <div className="inpcre_btn">
        <button className="">отправить</button>
        <img src="" alt="" />
      </div>
    </div>
  )
}