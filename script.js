const date = new Date();
const monthReal = date.getMonth();
const weekReal = date.getDay();
const dayReal = date.getDate();
const yearReal = date.getFullYear();
let lenMode = localStorage.getItem("len")||"EN";

const month = document.getElementById("month");
const week = document.getElementById("week");
const day = document.getElementById("day");
const year = document.getElementById("year");


document.getElementById("GE-label").addEventListener("click", ()=>
{
    lenMode = "GE";
    localStorage.setItem("len", lenMode);
    if(lenMode == "GE")
        {
            month.textContent = monthNamesGE[monthReal];
            week.textContent = weekNamesGE[weekReal];
        }
});

document.getElementById("EN-label").addEventListener("click", ()=>
    {
        lenMode = "EN";
        localStorage.setItem("len", lenMode);
        if(lenMode == "EN")
            {
                month.textContent = monthNamesEN[monthReal];
                week.textContent = weekNamesEN[weekReal];
            }
    });

const monthNamesEN = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const weekNamesEN = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" 
]

const monthNamesGE = [
    "იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი",
    "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოვემბერი", "დეკემბერი"
];

const weekNamesGE = [
    "კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი" 
]

year.textContent = yearReal;
day.textContent = dayReal;
if(lenMode == "EN")
    {
        month.textContent = monthNamesEN[monthReal];
        week.textContent = weekNamesEN[weekReal];
    } else if(lenMode == "GE")
        {
            month.textContent = monthNamesGE[monthReal];
            week.textContent = weekNamesGE[weekReal];
        } else {
        month.textContent = "Error";
        week.textContent = "Error";
    }