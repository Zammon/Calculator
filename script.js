//แก้เรื่อง . ใส่ได้แค่อันเดียว
//ถ้ามี 0 เป็นตัวแรกไม่สามารถเพิ่ม 0 ได้
//ติดลบ
var numbers = document.getElementById("numbers");
var display = document.getElementById("display");
var operators = document.getElementById("operators");

var a ='';
var b ='';
var op = '';
var opst ='false';
var re ='';
var rest = 'false';
var geop = op;
var chOpt='';
var chOptreserve='';

function convertArr(str){
    return [...str]
//ตัวแปรตัวเลขให้กลายเป็น Arrจาก String
}

function chOpiont(data){
    if(data==='a'){
        if(a.includes('.')){
            chOpt=true;
            chOptreserve = chOpt;
        }else {
            chOpt=false;
            chOptreserve = chOpt;
        }
    }else if(data==='b'){
        if(b.includes('.')){
            chOpt=true;
            chOptreserve = chOpt;
        }else {
            chOpt=false;
            chOptreserve = chOpt;
        }
    }
    
}

function getvalue(num){
    if(opst==='false'){
        chOpiont('a');
        if(a[0]==='0'){
            if(num==="."&&chOpt!==true){
                a =a+num;
            }else if(num!=="."&&chOpt!==true){
                a = a;
            }else if(a[0]==='0'&&a[1]==='.'&&num!=='.'){
                a =a+num;
            }else if(a[0]==='0'&&a[1]==='.'&&num==='.'){
                a =a;
            }
        }else {
            if(a===''&&num==='.'){
                 a ='';
            }else {
                if(num==="."&&chOpt!==true){
                a =a+num;
            } else if (num==="."&&chOpt===true){
                a =a;
            } else {
                a =a+num;
            }
            }
           
        }
        display.innerHTML=a;
    } else {    
        chOpiont('b');
        if(b[0]==='0'){
            if(num==="."&&chOpt!==true){
                b =b+num;
            }else if(num!=="."&&chOpt!==true){
                b = b;
            }else if(b[0]==='0'&&b[1]==='.'&&num!=='.'){
                b =b+num;
            }else if(b[0]==='0'&&b[1]==='.'&&num==='.'){
                b =b;
            }
        }else {
            if(b===''&&num==='.'){
                b ='';
           }else{ 
                if(num==="."&&chOpt!==true){
                    b =b+num;
                } else if (num==="."&&chOpt===true){
                    b =b;
                } else {
                    b =b+num;
                }  
            }
                  
        }
        display.innerHTML=b;
    }
        //แอดตัว string เพื่อให้แสดงบนหน้าจอด้านบนของเครื่องคิดเลข
}     
    function getoperator(operator) {
        
        if(a!==''){ 
            opst = 'true';
            chOpt='';
            if (op === '') {
            op = operator;
            document.getElementById(operator).classList.add("active");
            } else if (operator !== op) {
            document.getElementById(op).classList.remove("active");
            document.getElementById(operator).classList.add("active");
            op = operator;
            } else {
            document.getElementById(operator).classList.toggle("active");
            op ='';
            opst = 'false';
            chOpt=chOptreserve;
            }
    //เช็คสเตตัสว่ามีการกดปุ่ม + - * / หรือเปล่า?
        }
}


function result(status){
    const ai = parseFloat(a);
    const bi =parseFloat(b);
    rest = status;

    if(a!==''&&b!==''){
        if(op==="plus"){
            re = ai+bi;
            a = re.toString()
        } else if(op==="minus"){
            re = ai-bi;
            a = re.toString()
        } else if(op==="multipl"){
            re = ai*bi;
            a = re.toString()
        } else if(op==="divide"){
            re = ai/bi;
            a = re.toString()
        }
    }

    if(op!==''){
        document.getElementById(op).classList.remove("active");
    }
    display.innerHTML= a;
    b ='';
    re = '';
    op ='';
    opst = 'false';
    chOpt = chOptreserve;
    chOptreserve='';
//เมื่อกดปุ่มเท่ากับแล้วให้นำเอาค่าที่เก็บไว้ในตัวแปร a and b มาทำการคำนวณตามสัญญาลักษณ์ที่เก้บไว้ในตัวแปร op
//และแสดงผล และหลังจากนั้นให้คำการเซ็ตค่าใหม่
}

function del(){
    if(opst==='false'){
        var delsa = convertArr(a);
        delsa.pop()
        a = delsa.toString().replace(/,/g, "");
        display.innerHTML=a;
    } else if (opst==='true') {
        var delsb = convertArr(b);
        delsb.pop()
        b = delsb.toString().replace(/,/g, "");
        display.innerHTML=b;
    }
//ลบตัวเลขจากตัวแปร 
}

function delall(){
        if(op!==''){
            document.getElementById(op).classList.remove("active");
            a ='';
            b ='';
            op = '';
            opst ='false';
            re ='';
            rest = 'false';
            geop = op;
            chOpt='';
            chOptreserve='';
            display.innerHTML=a;
        } else {
            a ='';
            b ='';
            op = '';
            opst ='false';
            re ='';
            rest = 'false';
            geop = op;
            chOpt='';
            chOptreserve='';
            display.innerHTML=a;
    }
}