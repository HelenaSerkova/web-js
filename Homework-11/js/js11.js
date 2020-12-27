// 1.Описать объектную модель Альпинист, Гора, Группа для восхождения на гору.
// Альпинист создаётся с именем (не менее 3 символов) и адресом проживания (не менее 5 символов).
// Гора создаётся с названием (не менее 4 символов), страной (не менее 4 символов) и высотой (не менее 100 метров)
// Группа для восхождения на гору создаётся со следующими характеристиками:
// идёт набор в группу или нет;
// массив альпинистов;
// гора;
// должна быть возможность добавить альпиниста в группу, если набор ещё идёт
// В отдельном файле создать:
// 3 группы для восхождений на 3 различных горы:
// В первой группе 3 альпиниста (набор закрыт)
// Во второй и третьей группах по 2 альпиниста (набор в эти группы открыт)
// При выполнении задания не забывайте про сеттеры и геттеры.
class Сlimber {
  constructor(climberName, climberPlace){
    this.name = climberName;
    this.place = climberPlace;
  }
  set name(climberName){
    if (climberName.length < 3) throw new Error ('Короткое имя');
    this._name = climberName;
  }
  set place(climberPlace){
    if (climberPlace.length < 5) throw new Error ('Короткий адрес проживания');
    this._place = climberPlace;
  }
  get name (){
    return this._name;
  }
  get place(){
    return this._place;
  }
}

class Mountain {
  constructor(mountainName, mountainCountry, mountainHight){
    this.name = mountainName;
    this.country = mountainCountry;
    this.hight = mountainHight;
  }
  set name(mountainName){
    if (mountainName.length < 4) throw new Error ('Короткое имя горы');
    this._name = mountainName;
  }
  set country(mountainCountry){
    if (mountainCountry.length < 4) throw new Error ('Короткое имя страны');
    this._country = mountainCountry;
  }
  set hight(mountainHight){
    if (mountainHight.length < 100) throw new Error ('Слишком низкая гора');
    this._hight = mountainHight;
  }
  get name (){
    return this._name;
  }
  get country(){
    return this._country;
  }
  get hight(){
    return this._hight;
  }
}


class Group {
  climbers = [];
  mountain;
  // constructor()
  addGroup(climber){
    if (this.climbers.length >= 3) {
      console.log('Набор закрыт');
    } else {
      this.climbers.push (climber);
      console.log('Набор открыт');
    }
  }
  get climbers(){
    return this.climbers;
  }

}

export {Сlimber, Mountain, Group};
