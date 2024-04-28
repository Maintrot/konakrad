import style from '@/components/InputCreate.module.css'
import VectorStrelkaAlter from "@/assets/VectorStrelkaAlter";
import VectorStrelkaPurple from "@/assets/VectorStrelkaPurple";

export default function InputCreate() {
  return (
    <div className={style.inpcre}>
      <div className={style.inpcre_way}>
        <h3>Главная</h3>
        <VectorStrelkaAlter />
        <h3>Клиентам</h3>
        <VectorStrelkaAlter />
        <h3>Запрос ставки и условий погрузочно-разгрузочных работ</h3>
      </div>
      <div className={style.inpcre_title}>
        <h1>Запрос ставки и условий погрузочно-разгрузочных работ</h1>
      </div>
      <form action="">
        <div className={style.inpcre_itemform}>
          <div className={style.inpcre_itemform_form}>
            <label htmlFor="">Наименование груза *</label>
            <input type="text" />
            <label htmlFor="">ед. измерения *</label>
            <input type="text" />
            <label htmlFor="">Пункт назначения перевозки</label>
            <input type="text" />
            <label htmlFor="">Груз поступает в порт</label>
            <input type="text" />
            <label htmlFor="">Размер судовой партии</label>
            <input type="text" />
            <label htmlFor=""></label>
            <textarea name="" id="" cols="30" rows="5"></textarea>
          </div>
          <div className={style.inpcre_itemform_form}>
            <label htmlFor="">Размер партии *</label>
            <input type="text" />
            <label htmlFor="">Направление перевозки *</label>
            <input type="text" />
            <label htmlFor="">Период поступления груза к перевалке</label>
            <input type="text" />
            <label htmlFor="">Груз отправляется из порта</label>
            <input type="text" />
            <label htmlFor="">Опасность груза (класс)</label>
            <input type="text" />
            <label htmlFor="">Прикрепить файл</label>
            <input className='file_btn' type="file" />
          </div>
        </div>
      </form>
      <div className={style.inpcre_sayform}>
        <h1>Просим сообщить:</h1>
        <form action="">
          <div className={style.inpcre_sayform_form}>
            <div className={style.inpcre_sayform_form_btn}>
              <input type="checkbox" />
              <p>Ставку ПРР</p>
            </div>
            <div className={style.inpcre_sayform_form_btn}>
              <input type="checkbox" />
              <p>Срок технологического накопления груза</p>
            </div>
            <div className={style.inpcre_sayform_form_btn}>
              <input type="checkbox" />
              <p>
                Ставку хранения груза сверх срока технологического накопления
              </p>
            </div>
            <div className={style.inpcre_sayform_form_btn}>
              <input type="checkbox" />
              <p>Возможность приёма и перевалки груза в указанные сроки</p>
            </div>
          </div>
        </form>
      </div>
      <div className={style.inpcre_callform}>
        <div className={style.inpcre_callform_title}>
          <h1>Информация для обратной связи:</h1>
        </div>
        <form action="">
          <div className={style.inpcre_callform_form}>
            <div className={style.inpcre_callform_form_col}>
              <label htmlFor="">Имя, фамилия</label>
              <input type="text" />
              <label htmlFor="">Номер телефона/факса</label>
              <input type="tel" />
            </div>
            <div className={style.inpcre_callform_form_col}>
              <label htmlFor="">Название компании *</label>
              <input type="text" />
              <label htmlFor="">Адрес эл. почты *</label>
              <input type="email" />
            </div>
          </div>
        </form>
      </div>
      <div className={style.inpcre_btn}>
        <h3>отправить</h3>
        <div className={style.inpcre_btn_div}>
          <VectorStrelkaPurple/>
        </div>
      </div>
    </div>
  );
}
