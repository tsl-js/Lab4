var departments = [
  {id:1,name:"Терапевтичне",floor:2,head:"Коваленко О. В.",beds:40,occupied:31,phone:"+380 44 111-20-01",year:1985},
  {id:2,name:"Хірургічне",floor:3,head:"Мельник А. П.",beds:35,occupied:35,phone:"+380 44 111-20-02",year:1985},
    {id:3,name:"Кардіологічне",floor:4,head:"Шевченко І. М.",beds:30,occupied:22,phone:"+380 44 111-20-03",year:1998},
  {id:4,name:"Неврологічне",floor:5,head:"Бондар Т. С.",beds:25,occupied:18,phone:"+380 44 111-20-04",year:2004}
]

var doctors=[
{id:1, name:"Коваленко Олена Василівна", specialty:"Терапевт", dep:1, exp:22, category:"Вища", rate:1, phone:"+380 67 100-00-01"},
{id:2, name:"Мельник Андрій Петрович", specialty:"Хірург", dep:2, exp:18, category:"Вища", rate:1.5, phone:"+380 67 100-00-02"},
{id:3, name:"Шевченко Ігор Миколайович", specialty:"Кардіолог", dep:3, exp:15, category:"Перша", rate:1.25, phone:"+380 67 100-00-03"},
{id:4, name:"Бондар Тетяна Сергіївна", specialty:"Невролог", dep:4, exp:12, category:"Перша", rate:1, phone:"+380 67 100-00-04"},
{id:5, name:"Ткаченко Максим Олегович", specialty:"Хірург", dep:2, exp:4, category:"Друга", rate:0.75, phone:"+380 67 100-00-05"},
  {id:6, name:"Кравченко Наталія Іванівна", specialty:"Терапевт", dep:1, exp:2, category:"Без категорії", rate:0.5, phone:"+380 67 100-00-06"}
];

let patients = [
    {id:1,name:"Іваненко Петро Степанович",birth:"14.03.1956",gender:"Ч",diagnosis:"Гіпертонічна хвороба II ст.",doctor:3,ward:401,date:"20.10.2026",insurance:true},
    {id:2,name:"Савченко Марія Андріївна",birth:"02.07.1990",gender:"Ж",diagnosis:"Гострий апендицит",doctor:2,ward:305,date:"25.10.2026",insurance:false},
    {id:3,name:"Руденко Василь Іванович",birth:"30.11.1971",gender:"Ч",diagnosis:"Пневмонія",doctor:1,ward:210,date:"18.10.2026",insurance:true},
    {id:4,name:"Лисенко Оксана Петрівна",birth:"09.01.1984",gender:"Ж",diagnosis:"Мігрень",doctor:4,ward:502,date:"23.10.2026",insurance:true},
    {id:5,name:"Гончаренко Дмитро Юрійович",birth:"21.05.2001",gender:"Ч",diagnosis:"Перелом променевої кістки",doctor:5,ward:307,date:"26.10.2026",insurance:false},
    {id:6,name:"Поліщук Галина Миколаївна",birth:"17.09.1948",gender:"Ж",diagnosis:"Ішемічна хвороба серця",doctor:3,ward:403,date:"15.10.2026",insurance:true},
    {id:7,name:"Мороз Артем Вікторович",birth:"04.12.1995",gender:"Ч",diagnosis:"Гастрит",doctor:6,ward:214,date:"24.10.2026",insurance:false}
]


function getDepName(id){
  for(var i=0;i<departments.length;i++){
    if(departments[i].id==id) return departments[i].name
  }
  return ""
}

function getDoctorName(id) {
    for (let i = 0; i < doctors.length; i++) {
        if (doctors[i].id == id) {
            return doctors[i].name;
        }
    }
    return "";
}

function getAge(birth){
var parts=birth.split(".")
var age = new Date().getFullYear() - parts[2]
return age
}

function editTd(value,table,id,field){
  return "<td class='edit' title='Клікніть щоб змінити' onclick=\"editCell(this,'"+table+"',"+id+",'"+field+"')\">"+value+"</td>"
}

function delTd(table,id){
    return "<td><span class='del' title='Видалити' onclick=\"deleteRow('"+table+"',"+id+")\">&#10006;</span></td>"
}

function fillDepartments(){
    var html = "<tr><th>№</th><th>Назва</th><th>Поверх</th><th>Завідувач</th><th>Ліжок</th><th>Зайнято</th><th>Вільно</th><th>Телефон</th><th>Рік відкриття</th><th></th></tr>"
    for(var i=0;i<departments.length;i++){
        var d=departments[i]
        html+="<tr>"
        html+="<td>"+d.id+"</td>"
        html += editTd(d.name,"departments",d.id,"name")
        html+=editTd(d.floor,"departments",d.id,"floor")
        html+=editTd(d.head,"departments",d.id,"head")
        html+=editTd(d.beds,"departments",d.id,"beds")
        html+=editTd(d.occupied,"departments",d.id,"occupied")
        html+="<td>"+(d.beds-d.occupied)+"</td>"
        html+=editTd(d.phone,"departments",d.id,"phone")
        html+=editTd(d.year,"departments",d.id,"year")
        html+=delTd("departments",d.id)
        html+="</tr>"
    }
    document.getElementById("table1").innerHTML=html
}

function fillDoctors() {
  let html = "<tr><th>№</th><th>ПІБ</th><th>Спеціальність</th><th>Відділення</th><th>Стаж</th><th>Категорія</th><th>Ставка</th><th>Телефон</th><th></th></tr>";
  for (let i = 0; i < doctors.length; i++) {
    let d = doctors[i];
    html += "<tr><td>" + d.id + "</td>" + editTd(d.name, "doctors", d.id, "name") + editTd(d.specialty, "doctors", d.id, "specialty") + editTd(getDepName(d.dep), "doctors", d.id, "dep") + editTd(d.exp, "doctors", d.id, "exp") + editTd(d.category, "doctors", d.id, "category") + editTd(d.rate, "doctors", d.id, "rate") + editTd(d.phone, "doctors", d.id, "phone") + delTd("doctors", d.id) + "</tr>";
  }
  document.getElementById("table2").innerHTML = html;
}

function fillPatients(){
var html="<tr><th>№</th><th>ПІБ</th><th>Дата народження</th><th>Вік</th><th>Стать</th><th>Діагноз</th><th>Лікар</th><th>Палата</th><th>Дата госпіталізації</th><th>Страховка</th><th></th></tr>"
for(var i=0;i<patients.length;i++){
    var p = patients[i]
    var ins
    if(p.insurance==true){ins="так"}else{ins="ні"}
    html+="<tr>"
    html+="<td>"+p.id+"</td>"+editTd(p.name,"patients",p.id,"name")+"<td>"+p.birth+"</td><td>"+getAge(p.birth)+"</td>"
    html+=editTd(p.gender,"patients",p.id,"gender")+editTd(p.diagnosis,"patients",p.id,"diagnosis")+editTd(getDoctorName(p.doctor),"patients",p.id,"doctor")
    html+=editTd(p.ward,"patients",p.id,"ward")+"<td>"+p.date+"</td>"+editTd(ins,"patients",p.id,"insurance")
    html+=delTd("patients",p.id)
    html+="</tr>"
}
document.getElementById("table3").innerHTML=html
}

function getArray(table){
    if(table=="departments") return departments
    if(table=="doctors") return doctors
    return patients
}

function fillAll(){
  fillDepartments()
  fillDoctors()
  fillPatients()
  fillSelects()
}

function deleteRow(table,id){
    var arr=getArray(table)

    if(table=="departments"){
        var count=0
        for(var i=0;i<doctors.length;i++){
            if(doctors[i].dep==id) count++
        }
        if(count>0){
            alert("Неможливо видалити відділення \""+getDepName(id)+"\"!\nВоно використовується в таблиці Лікарі (лікарів: "+count+").\nСпочатку видаліть або переведіть цих лікарів.")
            return
        }
    }
    if (table == "doctors") {
        let count = 0
        for (let i = 0; i < patients.length; i++) {
            if (patients[i].doctor == id) count++
        }
        if (count > 0) {
            alert("Неможливо видалити лікаря " + getDoctorName(id) + "!\nЛікар використовується в таблиці Пацієнти (пацієнтів: " + count + ").\nСпочатку видаліть цих пацієнтів.")
            return
        }
    }

    if(!confirm("Видалити запис №"+id+"?")) return

    for(var i=0;i<arr.length;i++){
        if(arr[i].id==id){
            arr.splice(i,1)
            break
        }
    }
    saveData()
    fillAll()
}

var numberFields=["floor","beds","occupied","year","exp","rate","ward"]

function getOptions(field){
    var list=[]
    if(field=="dep"){
        for(var i=0;i<departments.length;i++) list.push([departments[i].id,departments[i].name])
        return list
    }
    if(field=="doctor"){
        for(var i=0;i<doctors.length;i++) list.push([doctors[i].id,doctors[i].name+" ("+doctors[i].specialty+")"])
        return list
    }
    if(field=="category") return [["Вища","Вища"],["Перша","Перша"],["Друга","Друга"],["Без категорії","Без категорії"]]
    if(field=="gender") return [["Ч","Ч"],["Ж","Ж"]]
    if(field=="insurance") return [["true","так"],["false","ні"]]
    return null
}

function editCell(td,table,id,field){
    if(td.getElementsByTagName("input").length>0) return

    var arr=getArray(table)
    var obj
    for(var i=0;i<arr.length;i++){
        if(arr[i].id==id) obj=arr[i]
    }

    var input
    var options=getOptions(field)
    if(options!=null){
        input=document.createElement("select")
        for(var i=0;i<options.length;i++){
            var opt=document.createElement("option")
            opt.value=options[i][0]
            opt.text=options[i][1]
            input.appendChild(opt)
        }
        input.value=String(obj[field])
        input.onchange=function(){ save() }
        td.innerHTML=""
        td.appendChild(input)
        input.focus()
    } else {
    input=document.createElement("input")
    input.value=obj[field]
    if(numberFields.indexOf(field)!=-1) input.type="number"
    td.innerHTML=""
    td.appendChild(input)
    input.focus()
    input.select()
    }

    var done=false

    function save(){
        if(done) return
        done=true
        var value=input.value.trim()
        if(value==""){
            alert("Значення не може бути порожнім")
            fillAll()
            return
        }
        if(numberFields.indexOf(field)!=-1){
            value=Number(value)
            if(isNaN(value)||value<0){
                alert("Потрібно ввести додатне число")
                fillAll()
                return
            }
        }
        if(table=="departments"&&field=="occupied"&&value>obj.beds){
            alert("Зайнятих ліжок не може бути більше ніж ліжок ("+obj.beds+")")
            fillAll()
            return
        }
        if(table=="departments"&&field=="beds"&&value<obj.occupied){
          alert("Ліжок не може бути менше ніж зайнято ("+obj.occupied+")")
          fillAll()
          return
        }
        if(field=="dep"||field=="doctor") value=Number(value)
        if(field=="insurance") value=(value=="true")
        obj[field]=value
        saveData()
        fillAll()
    }

    input.onkeydown=function(e){
        if(e.key=="Enter") save()
        if(e.key=="Escape"){
            done=true
            fillAll()
        }
    }
    input.onblur=save
}

function showTab(n){
    for(var i=1;i<=3;i++){
        document.getElementById("tab"+i).style.display="none"
        document.getElementById("btn"+i).className=""
    }
    document.getElementById("tab"+n).style.display="block"
  document.getElementById("btn"+n).className="active"
}

function showForm(n){
  document.getElementById("form"+n).style.display="block"
}

function hideForm(n) {
    document.getElementById("form"+n).style.display = "none";
    var inputs = document.getElementById("form"+n).getElementsByTagName("input")
    for(var i=0;i<inputs.length;i++){
        if(inputs[i].type=="checkbox") inputs[i].checked=false
        else if(inputs[i].id=="docRate") inputs[i].value=1
        else inputs[i].value=""
    }
}

function fillSelects(){
    var html=""
    for(var i=0;i<departments.length;i++){
        html+="<option value='"+departments[i].id+"'>"+departments[i].name+"</option>"
    }
    document.getElementById("docDep").innerHTML=html
    html = ""
    for (let i = 0; i < doctors.length; i++) {
        html += "<option value='" + doctors[i].id + "'>" + doctors[i].name + " (" + doctors[i].specialty + ")</option>"
    }
    document.getElementById("patDoctor").innerHTML = html
}

function newId(arr){
  if(arr.length==0) return 1
  return arr[arr.length-1].id+1
}

function toDate(value){
var parts = value.split("-")
return parts[2]+"."+parts[1]+"."+parts[0]
}

function addDepartment(){
    var name=document.getElementById("depName").value.trim()
    var floor=document.getElementById("depFloor").value
    var head=document.getElementById("depHead").value.trim()
    var beds=document.getElementById("depBeds").value
    var occupied=document.getElementById("depOccupied").value
    var phone=document.getElementById("depPhone").value.trim()
    var year=document.getElementById("depYear").value

    if(name==""||floor==""||head==""||beds==""||occupied==""||phone==""||year==""){
        alert("Заповніть всі поля!")
        return
    }
    if(Number(occupied)>Number(beds)){
        alert("Зайнятих ліжок не може бути більше ніж ліжок")
        return
    }
    if (Number(year) < 1800 || Number(year) > new Date().getFullYear()) {
      alert("Неправильний рік")
      return
    }

    departments.push({id:newId(departments),name:name,floor:Number(floor),head:head,beds:Number(beds),occupied:Number(occupied),phone:phone,year:Number(year)})
    saveData()
    fillDepartments()
    fillSelects()
    hideForm(1)
}

function addDoctor() {
  let name = document.getElementById("docName").value.trim();
  let specialty = document.getElementById("docSpecialty").value.trim();
  let dep = document.getElementById("docDep").value;
  let exp = document.getElementById("docExp").value;
  let category = document.getElementById("docCategory").value;
  let rate = document.getElementById("docRate").value;
  let phone = document.getElementById("docPhone").value.trim();

  if (name == "" || specialty == "" || exp == "" || rate == "" || phone == "") {
    alert("Заповніть всі поля!");
    return;
  }
  if(Number(exp)<0){
    alert("Стаж не може бути відємним")
    return
  }

  doctors.push({id: newId(doctors), name: name, specialty: specialty, dep: Number(dep), exp: Number(exp), category: category, rate: Number(rate), phone: phone});
  saveData();
  fillDoctors();
  fillSelects();
  hideForm(2);
}

function addPatient(){
var name=document.getElementById("patName").value.trim()
var birth=document.getElementById("patBirth").value
var gender=document.getElementById("patGender").value
var diagnosis=document.getElementById("patDiagnosis").value.trim()
var doctor=document.getElementById("patDoctor").value
var ward=document.getElementById("patWard").value
var date=document.getElementById("patDate").value
var insurance=document.getElementById("patInsurance").checked

if(name==""||birth==""||diagnosis==""||ward==""||date==""){
    alert("Заповніть всі поля!")
    return
}
if(new Date(birth)>new Date()){
    alert("Дата народження не може бути в майбутньому")
    return
}
if(new Date(date)<new Date(birth)){
  alert("Дата госпіталізації раніше дати народження")
  return
}

patients.push({id:newId(patients),name:name,birth:toDate(birth),gender:gender,diagnosis:diagnosis,doctor:Number(doctor),ward:Number(ward),date:toDate(date),insurance:insurance})
saveData()
fillPatients()
hideForm(3)
}

function saveData(){
    var data={departments:departments,doctors:doctors,patients:patients}
    localStorage.setItem("hospital",JSON.stringify(data))
}

function loadData(){
    var data=localStorage.getItem("hospital")
    if(data==null) return
    try{
        data=JSON.parse(data)
        departments=data.departments
        doctors=data.doctors
        patients=data.patients
    }catch(e){
        console.log("помилка читання localStorage",e)
    }
}

function resetData(){
  if(!confirm("Скинути всі зміни і повернути початкові дані?")) return
  localStorage.removeItem("hospital")
  location.reload()
}

window.addEventListener("storage",function(e){
    if(e.key=="hospital"||e.key==null){
        if(e.newValue==null){
            location.reload()
        }else{
            loadData()
            fillAll()
        }
    }
})

loadData()
fillAll()
showTab(1)
