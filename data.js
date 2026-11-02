var startData = {
departments: [
  {id:1,name:"Терапевтичне",floor:2,head:"Коваленко О. В.",beds:40,occupied:31,phone:"+380 44 111-20-01",year:1985},
  {id:2,name:"Хірургічне",floor:3,head:"Мельник А. П.",beds:35,occupied:35,phone:"+380 44 111-20-02",year:1985},
    {id:3,name:"Кардіологічне",floor:4,head:"Шевченко І. М.",beds:30,occupied:22,phone:"+380 44 111-20-03",year:1998},
  {id:4,name:"Неврологічне",floor:5,head:"Бондар Т. С.",beds:25,occupied:18,phone:"+380 44 111-20-04",year:2004}
],

doctors: [
{id:1, name:"Коваленко Олена Василівна", specialty:"Терапевт", dep:1, exp:22, category:"Вища", rate:1, phone:"+380 67 100-00-01"},
{id:2, name:"Мельник Андрій Петрович", specialty:"Хірург", dep:2, exp:18, category:"Вища", rate:1.5, phone:"+380 67 100-00-02"},
{id:3, name:"Шевченко Ігор Миколайович", specialty:"Кардіолог", dep:3, exp:15, category:"Перша", rate:1.25, phone:"+380 67 100-00-03"},
{id:4, name:"Бондар Тетяна Сергіївна", specialty:"Невролог", dep:4, exp:12, category:"Перша", rate:1, phone:"+380 67 100-00-04"},
{id:5, name:"Ткаченко Максим Олегович", specialty:"Хірург", dep:2, exp:4, category:"Друга", rate:0.75, phone:"+380 67 100-00-05"},
  {id:6, name:"Кравченко Наталія Іванівна", specialty:"Терапевт", dep:1, exp:2, category:"Без категорії", rate:0.5, phone:"+380 67 100-00-06"}
],

patients: [
    {id:1,name:"Іваненко Петро Степанович",birth:"14.03.1956",gender:"Ч",diagnosis:"Гіпертонічна хвороба II ст.",doctor:3,ward:401,date:"20.10.2026",insurance:true},
    {id:2,name:"Савченко Марія Андріївна",birth:"02.07.1990",gender:"Ж",diagnosis:"Гострий апендицит",doctor:2,ward:305,date:"25.10.2026",insurance:false},
    {id:3,name:"Руденко Василь Іванович",birth:"30.11.1971",gender:"Ч",diagnosis:"Пневмонія",doctor:1,ward:210,date:"18.10.2026",insurance:true},
    {id:4,name:"Лисенко Оксана Петрівна",birth:"09.01.1984",gender:"Ж",diagnosis:"Мігрень",doctor:4,ward:502,date:"23.10.2026",insurance:true},
    {id:5,name:"Гончаренко Дмитро Юрійович",birth:"21.05.2001",gender:"Ч",diagnosis:"Перелом променевої кістки",doctor:5,ward:307,date:"26.10.2026",insurance:false},
    {id:6,name:"Поліщук Галина Миколаївна",birth:"17.09.1948",gender:"Ж",diagnosis:"Ішемічна хвороба серця",doctor:3,ward:403,date:"15.10.2026",insurance:true},
    {id:7,name:"Мороз Артем Вікторович",birth:"04.12.1995",gender:"Ч",diagnosis:"Гастрит",doctor:6,ward:214,date:"24.10.2026",insurance:false}
]
}
