import React from 'react'
import style from '../css/addpage.module.css'
import { ReactComponent as key } from '../img/pageadd/Key.svg'
import { ReactComponent as cloak } from '../img/pageadd/Cloak.svg'
import { ReactComponent as Home } from '../img/pageadd/Home.svg'
import { ReactComponent as House } from '../img/pageadd/House.svg'
import { ReactComponent as Apartment } from '../img/pageadd/Apartment.svg'
import { Children } from 'react'
import BtnFIlter from '../componenets/UI/btnFilter/BtnFIlter'

function AddPage() { 
  return (
    <div className='container'>
      <div className={style.quest}><h1>Новое объявление</h1>
        <button className={style.btn}>продать<img src={key} alt="" /></button>
        <button className={style.btn}style={{marginLeft: '60px'}}>сдать<img src={cloak} alt="" /></button>
      </div>
      <div className={style.houseType}><h1>Тип недвижимости</h1>
      <div className={style.chooseHouse}>
        <button className={style.trip}><img src={Apartment} alt="" />Квартиры</button>
        <button className={style.trip2}><img src={House} alt="" />Новостройки</button>
        <button className={style.trip}> <img src={{Home}} alt="" />Дом</button>
      </div>
      </div>
      <div className={style.MappingCard}>
       <div className={style.Mapping_inner}>
          <h1 style={{marginTop: '60px', marginBottom: '20px'}}>Расположение</h1>
          <div className={style.addInp}>
            <input className={style.adressInp} placeholder='напишите адрес'></input>
            <input className={style.InputAdd} placeholder="Номер квартиры" type="number"></input>            
          </div>
          <div className={style.Mapping}></div>
          <div className={style.Contacts} style={{marginTop: '50px', marginBottom: '20px'}}><h1>Контакты</h1>
            <p>Размещает объявление</p>
            <div className={style.HumanChoose}>
              <button className={style.your} placeholder='Собственник'>Собственник</button>
              <button className={style.agent} placeholder='Агент'>Агент</button>
            </div>
            <div className={style.numberPhone}><p>номер телефона</p></div>
             <div>
             <input className={style.Number} type="number"></input>
            </div>
          </div>
          <div className={style.KvartInfo}><h1 style={{marginBottom: '20px', marginTop: '60px'}}>O Квартире</h1>
            <p style={{marginTop: '20px', marginBottom: '15px'}}>Этаж</p>
            <input className={style.floorInp} type={'number'} ></input>
            <div className={style.roomInfo}><p>Комнат</p> 
             <div className={style.hentaibtn}>
              <button className={style.btnRoom}>1</button>
              <button className={style.btnRoom}>2</button>
              <button className={style.btnRoom}>3</button>
              <button className={style.btnRoom}>4</button>
              <button className={style.btnRoom}>5</button>
              <button className={style.btnRoom}>6</button>
              <button className={style.btnRoom2}>6+</button>
             </div> 
             <div className={style.miles}><p>Площадь</p>
              <div className={style.miles2}><p>Общая</p><input type="text" /></div>
              <div className={style.miles3}><p>Жилая</p><input type="text" /></div>
             </div>
             <div className={style.heightFloor}>
              <p style={{marginTop: '40px'}}>Высота потолков</p>
              <input className={style.heightInput}></input>
             </div>
             <div className={style.Toilet}><p style={{marginTop: '40px'}}>Санузел</p>
             <div className={style.Toilets}>
              <button onClick type={'checkbox'}></button><p>Совмещенный</p>
              </div>
              <div className={style.Toilets2}>
              <button onClick type={'Checkbox'}></button><p>Раздельный</p>
              </div>
             </div>
             <div className={style.Window}>
              <p>Окна</p>
              <div className={style.Window1}><button type={'checkbox'}></button><p>Во двор</p></div>
              <div className={style.Window2}><button type={'checkbox'}></button><p>На Улицу</p></div>
             </div>
            </div>
          <div className={style.Photo} style={{marginTop: '60px'}}><h1>Фотографии</h1>
              <input type={'file'} placeholder='Перетащите в область или' className={style.PhotoInp}></input>
          </div>
          <div className={style.Video} style={{marginTop: '60px'}}>
              <h1>Видео</h1>
              <input type="url" className={style.VideoInp}></input>
          </div>
          <div className={style.information} style={{marginTop: '60px'}}><h1>Описание</h1><textarea className={style.TextArea} name='itaksoidet' id='1' cols="50" rows="10"></textarea></div>
          </div>
       </div>      
       <div className={style.AddInformation}> 
       <button className={style.Add}><span>опубликовать</span></button></div>
      </div>
    </div>
  )
}

export default AddPage