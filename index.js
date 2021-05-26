let m=document.getElementById('gg')
let re=document.getElementById('ez')
m.innerHTML=('&nbsp')
re.innerHTML=('&nbsp')
let s=' '
let r=['สิบ','ร้อย','พัน','หมื่น','แสน','ล้าน']
let M=''
let y=''
let g=0
let n1=0
let n2=1
let n3=2
let n4=3
let n5=4
let n6=5
let n7=6
let n8=0
let n9=1
let n10=2
let n11=3
let n12=4
let n13=5
let n14=6
let w=''
function num(y) {
    a=s.length-1
    if(re.innerHTML!='&nbsp;'){}
    else{
        s=s+y
        m.innerHTML=(s)
    }
}
function add(aa){
    let p=aa.length
    let y=''
    let pp=0
    for(pp=0;pp<p;pp++){
        if((pp+1)%3==0){
            if(pp==p-1){
                y=y+aa[pp]
            }
            else{
                y=y+aa[pp]+','
            }
        }
        else{
            y=y+aa[pp]
        }
    }
    p=y.length
    let yy=''
    for(let t=0;t<p;t++){
        yy=y[t]+yy
    }
    return yy

}
function cal(sf){
    let i=sf.length-1
    let sfake=''
    let letters=''
    let e = 0
    for(e=0; e<=i; e++){
        if(sf[e] !== '0'){
            break
        }
    }
    sf=sf.slice(e)
    if(sf===''){
        sf='0'
    }
    i=sf.length-1
    for(let a=0;a<=i;a++){
        sfake=sf[a]+sfake
    }
    x=add(sfake)
    while(g<=1){
        while(n1==n8){
            if(typeof(sfake[n1])==='undefined'){}
            else{
                if(sfake[n1]=='1'){
                    if(sfake[n1+1]=='0'||typeof(sfake[n1+1])=='undefined'){
                        letters='หนึ่ง'+letters
                    }
                    else{
                        letters='เอ็ด'+letters
                    }
                }
                else if(sfake[n1]=='2'){
                    letters='สอง'+letters
                }
                else if(sfake[n1]=='3'){
                    letters='สาม'+letters
                }
                else if(sfake[n1]=='4'){
                    letters='สี่'+letters
                }
                else if(sfake[n1]=='5'){
                    letters='ห้า'+letters
                }
                else if(sfake[n1]=='6'){
                    letters='หก'+letters
                }
                else if(sfake[n1]=='7'){
                    letters='เจ็ด'+letters
                }
                else if(sfake[n1]=='8'){
                    letters='แปด'+letters
                }
                else if(sfake[n1]=='9'){
                    letters='เก้า'+letters
                }
                else if(sfake[n1]=='0'){
                    let l=sfake.length
                    if(l==1){
                        letters='ศูนย์'+letters
                    }
                }
            }
            n1=n1+1
        }
        while(n2==n9){
            if(typeof(sfake[n2])==='undefined'){}
            else{
                if(sfake[n2]=='1'){
                    letters=r[0]+letters
                }
                else if(sfake[n2]=='2'){
                    letters='ยี่'+r[0]+letters
                }
                else if(sfake[n2]=='3'){
                    letters='สาม'+r[0]+letters
                }
                else if(sfake[n2]=='4'){
                    letters='สี่'+r[0]+letters
                }
                else if(sfake[n2]=='5'){
                    letters='ห้า'+r[0]+letters
                }
                else if(sfake[n2]=='6'){
                    letters='หก'+r[0]+letters
                }
                else if(sfake[n2]=='7'){
                    letters='เจ็ด'+r[0]+letters
                }
                else if(sfake[n2]=='8'){
                    letters='แปด'+r[0]+letters
                }
                else if(sfake[n2]=='9'){
                    letters='เก้า'+r[0]+letters
                }
                else if(sfake[n2]=='0'){}
            }
            n2=n2+6
        }
        n9=n9+6
        while(n3==n10){
            if(typeof(sfake[n3])==='undefined'){}
            else{
                if(sfake[n3]=='1'){
                    letters='หนึ่ง'+r[1]+letters
                }
                else if(sfake[n3]=='2'){
                    letters='สอง'+r[1]+letters
                }
                else if(sfake[n3]=='3'){
                    letters='สาม'+r[1]+letters
                }
                else if(sfake[n3]=='4'){
                    letters='สี่'+r[1]+letters
                }
                else if(sfake[n3]=='5'){
                    letters='ห้า'+r[1]+letters
                }
                else if(sfake[n3]=='6'){
                    letters='หก'+r[1]+letters
                }
                else if(sfake[n3]=='7'){
                    letters='เจ็ด'+r[1]+letters
                }
                else if(sfake[n3]=='8'){
                    letters='แปด'+r[1]+letters
                }
                else if(sfake[n3]=='9'){
                    letters='เก้า'+r[1]+letters
                }
                else if(sfake[n3]=='0'){}
            }
            n3=n3+6
        }
        n10=n10+6
        while(n4==n11){
            if(typeof(sfake[n4])==='undefined'){}
            else{
                if(sfake[n4]=='1'){
                    letters='หนึ่ง'+r[2]+letters
                }
                else if(sfake[n4]=='2'){
                    letters='สอง'+r[2]+letters
                }
                else if(sfake[n4]=='3'){
                    letters='สาม'+r[2]+letters
                }
                else if(sfake[n4]=='4'){
                    letters='สี่'+r[2]+letters
                }
                else if(sfake[n4]=='5'){
                    letters='ห้า'+r[2]+letters
                }
                else if(sfake[n4]=='6'){
                    letters='หก'+r[2]+letters
                }
                else if(sfake[n4]=='7'){
                    letters='เจ็ด'+r[2]+letters
                }
                else if(sfake[n4]=='8'){
                    letters='แปด'+r[2]+letters
                }
                else if(sfake[n4]=='9'){
                    letters='เก้า'+r[2]+letters
                }
                else if(sfake[n4]=='0'){}
            }
            n4=n4+6
        }
        n11=n11+6
        while(n5==n12){
            if(typeof(sfake[n5])==='undefined'){}
            else{
                if(sfake[n5]=='1'){
                    letters='หนึ่ง'+r[3]+letters
                }
                else if(sfake[n5]=='2'){
                    letters='สอง'+r[3]+letters
                }
                else if(sfake[n5]=='3'){
                    letters='สาม'+r[3]+letters
                }
                else if(sfake[n5]=='4'){
                    letters='สี่'+r[3]+letters
                }
                else if(sfake[n5]=='5'){
                    letters='ห้า'+r[3]+letters
                }
                else if(sfake[n5]=='6'){
                    letters='หก'+r[3]+letters
                }
                else if(sfake[n5]=='7'){
                    letters='เจ็ด'+r[3]+letters
                }
                else if(sfake[n5]=='8'){
                    letters='แปด'+r[3]+letters
                }
                else if(sfake[n5]=='9'){
                    letters='เก้า'+r[3]+letters
                }
                else if(sfake[n5]=='0'){}
            }
            n5=n5+6
        }
        n12=n12+6
        while(n6==n13){
            if(typeof(sfake[n6])==='undefined'){}
            else{
                if(sfake[n6]=='1'){
                    letters='หนึ่ง'+r[4]+letters
                }
                else if(sfake[n6]=='2'){
                    letters='สอง'+r[4]+letters
                }
                else if(sfake[n6]=='3'){
                    letters='สาม'+r[4]+letters
                }
                else if(sfake[n6]=='4'){
                    letters='สี่'+r[4]+letters
                }
                else if(sfake[n6]=='5'){
                    letters='ห้า'+r[4]+letters
                }
                else if(sfake[n6]=='6'){
                    letters='หก'+r[4]+letters
                }
                else if(sfake[n6]=='7'){
                    letters='เจ็ด'+r[4]+letters
                }
                else if(sfake[n6]=='8'){
                    letters='แปด'+r[4]+letters
                }
                else if(sfake[n6]=='9'){
                    letters='เก้า'+r[4]+letters
                }
                else if(sfake[n6]=='0'){}
            }
            n6=n6+6
        }
        n13=n13+6
        while(n7==n14){
            if(typeof(sfake[n7])==='undefined'){g=g+1}
            else{
                if(sfake[n7]=='1'){
                    letters='หนึ่ง'+r[5]+letters
                }
                else if(sfake[n7]=='2'){
                    letters='สอง'+r[5]+letters
                }
                else if(sfake[n7]=='3'){
                    letters='สาม'+r[5]+letters
                }
                else if(sfake[n7]=='4'){
                    letters='สี่'+r[5]+letters
                }
                else if(sfake[n7]=='5'){
                    letters='ห้า'+r[5]+letters
                }
                else if(sfake[n7]=='6'){
                    letters='หก'+r[5]+letters
                }
                else if(sfake[n7]=='7'){
                    letters='เจ็ด'+r[5]+letters
                }
                else if(sfake[n7]=='8'){
                    letters='แปด'+r[5]+letters
                }
                else if(sfake[n7]=='9'){
                    letters='เก้า'+r[5]+letters
                }
                else if(sfake[n7]=='0'){
                    letters=r[5]+letters
                }
            }
            n7=n7+6
        }
        n14=n14+6
    }
    letters='อ่านว่า '+letters
    return letters
}
function equal () {
    q=s.length-1
    if(re.innerHTML=='&nbsp;'){
        x=s.slice(1)
        w=cal(x)
        m.innerHTML=(x)
        re.innerHTML=(w)
    }
    else{}
}
function cl(){
    s=' '
    w=''
    m.innerHTML=('&nbsp')
    re.innerHTML=('&nbsp')
}
