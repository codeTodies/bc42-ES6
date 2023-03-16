let memberList=[];
let StudentList=[];
let CustomerList=[];
let employeeList=[];


    //Create new mem
    function createMem(){
        
      let type=getEle("#dtQL").value;
      let id=getEle("#txtMaSV").value;
      let name=getEle("#txtTenSV").value;
      let email=getEle("#txtEmail").value;
      let address=getEle("#txtAddress").value;
      let company=getEle("#txtCompany").value;
     if(type=="Chọn đối tượng" || type=="")
      {
        getEle("#spanDTQL").innerHTML="Cần chọn đối tượng";
      }
      let valid=validate()
    if(type=="Học Sinh")
    {
        let math=+getEle("#txtDiemToan").value;
        let physic=+getEle("#txtDiemly").value;
        let chemistry=+getEle("#txtDiemHoa").value;
       if(valid==true)
       {
        const student=new Student(id,name,email,address,type,physic,math,chemistry);
        StudentList.push(student);
        memberList.push(student);
        console.log(memberList);
        renderTable(memberList)
        resetForm()
       } 
       
    }
    else if(type=="Nhân Viên")
    {
       if(valid==true)
       {
         let day=+getEle("#txtDay").value;
        console.log(day);
        let profit=+getEle("#txtProfit").value;
        const employee=new Employee(id,name,email,address,type,day,profit)
        employeeList.push(employee);
        memberList.push(employee);
        renderTable(memberList)
        resetForm()
       }
    }
    else if(type=="Khách Hàng")
    {
        if(valid==true)
        {let bill=getEle("#txtBill").value;
        let review=getEle("#txtReview").value;
        const customer=new Customer(id,name,email,address,type,company,bill,review)
        CustomerList.push(customer);
        memberList.push(customer);
        console.log(memberList);
        renderTable(memberList)
        resetForm()}
    }
    };
    


    //Render table
    function renderTable(memberList) {
    const html = memberList.reduce((output, member) => {
       return (output += `
        <tr>
            <td>${member.id}</td>
            <td>${member.name}</td>
            <td>${member.email}</td>
            <td>${member.address}</td>
            <td>${member.type}</td>
            <td>${member.calculate? member.calculate() : (member.allProfit ? member.allProfit() : member.review)}</td>
            <td>${member.company}</td>
            <td>
                <button class="btn btn-danger" onclick="deleteMember('${member.id}')">Xóa</button>
                <button class="btn btn-warning" onclick="selectToUpdateMem('${member.id}')">Chỉnh Sửa</button>
            </td>
        </tr>
                `);
                }, "");
                getEle("#tbodySinhVien").innerHTML = html;
    }



    //DELETE MEMBER
    function deleteMember(memAccount)
{
  memberList=memberList.filter((member)=>{
    return member.id!=memAccount;
  });
  renderTable(memberList);
}


    //RESET FORM
    function resetForm()
    {
         getEle("#dtQL").value="";
       getEle("#txtMaSV").value="";
       getEle("#txtTenSV").value="";
       getEle("#txtEmail").value="";
       getEle("#txtAddress").value="";
       getEle("#txtCompany").value="";
       getEle("#txtDiemToan").value="";
       getEle("#txtDiemly").value="";
       getEle("#txtDiemHoa").value="";
       getEle("#txtDay").value="";
       getEle("#txtProfit").value="";
       getEle("#txtBill").value="";
       getEle("#txtReview").value="";
       getEle("#btnCreate").disabled=false;
    getEle("#txtMaSV").disabled=false;
    }

    //Update Member
    function selectToUpdateMem(memAccount)
{
  let selectedMem=memberList.find((member)=>{
    return member.id==memAccount;
  })
    getEle("#dtQL").value=selectedMem.type;
    getEle("#txtMaSV").value=selectedMem.id;
    getEle("#txtTenSV").value=selectedMem.name;
    getEle("#txtEmail").value=selectedMem.email;
    getEle("#txtAddress").value=selectedMem.address;
    getEle("#txtCompany").value=selectedMem.company;
    getEle("#txtDiemToan").value=selectedMem.math;
    getEle("#txtDiemly").value=selectedMem.physic;
    getEle("#txtDiemHoa").value=selectedMem.chemistry;
    getEle("#txtDay").value=selectedMem.day;
    getEle("#txtProfit").value=selectedMem.profit;
    getEle("#btnCreate").disabled=true;
    getEle("#txtMaSV").disabled=true;

}
function Update(){{
      let type=getEle("#dtQL").value;
      let id=getEle("#txtMaSV").value;
      let name=getEle("#txtTenSV").value;
      let email=getEle("#txtEmail").value;
      let address=getEle("#txtAddress").value;
      let company=getEle("#txtCompany").value;
      let math=+getEle("#txtDiemToan").value;
      let physic=+getEle("#txtDiemly").value;
      let chemistry=+getEle("#txtDiemHoa").value;
      let day=+getEle("#txtDay").value;
      let profit=+getEle("#txtProfit").value;
      let bill= getEle("#txtBill").value;
      let review= getEle("#txtReview").value;
      let valid=validate()
    if (type=="Học Sinh")
    {
        if(valid==true)
        {
          let member=new Student(id,name,email,address,type,physic,math,chemistry)
        let index=memberList.findIndex((member)=>{{
      return member.id==id;
    }})
    memberList[index]=member;
    renderTable(memberList)
    resetForm()
        }
    }
    else if(type=="Khách Hàng")
    {
        if(valid==true)
        {
          let member=new Customer(id,name,email,address,type,company,bill,review)
        let index=memberList.findIndex((member)=>{{
      return member.id==id;
    }})
    memberList[index]=member;
    renderTable(memberList)
    resetForm()
        }
    }
    else if(type=="Nhân Viên")
    {
        if(valid==true)
        {
          let member=new Employee(id,name,email,address,type,day,profit)
        let index=memberList.findIndex((member)=>{{
      return member.id==id;
    }})
    memberList[index]=member;
    renderTable(memberList)
    resetForm()
        }
    }
  }};


  //sort
  function sortAz() {
    memberList.sort((a, b) => {
        let A = a.name.toUpperCase(); 
        let B = b.name.toUpperCase(); 
        if (A < B) {
            return -1;
        }
        if (A > B) {
            return 1;
        }
        // names must be equal
        return 0;
    });
    renderPerson(memberList);
}


//VALIDATION
function validate()
{
      let type=getEle("#dtQL").value;
      let id=getEle("#txtMaSV").value;
      let name=getEle("#txtTenSV").value;
      let email=getEle("#txtEmail").value;
      let address=getEle("#txtAddress").value;
      let company=getEle("#txtCompany").value;
      let math=+getEle("#txtDiemToan").value;
      let physic=+getEle("#txtDiemly").value;
      let chemistry=+getEle("#txtDiemHoa").value;
      let day=+getEle("#txtDay").value;
      let profit=+getEle("#txtProfit").value;
      let bill= getEle("#txtBill").value;
      let review= getEle("#txtReview").value;

      
       //vali id
      let reID=/[^0-9]/g
      let split=id.split("");
      if(split.length!=4 && !(reID.test(id)))
      {
         getEle("#spanMaSV").innerHTML="Mã chỉ có 4 kí tự số";
         return false
      }

      //valid name
      if(!(/^[a-zA-Z\s]*$/g.test(name)))
      {
        getEle("#spanTenSV").innerHTML="Tên không được có số và kí tự đặc biệt"
        return false;
      }
      //valid email
      if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
      {
        getEle("#spanEmailSV").innerHTML="Email không hợp lệ";
        return false;
      }
      
      //valid address
      if(!(/^[A-Za-z0-9 ]+$/.test(address)))
      {
        getEle("#spanAddress").innerHTML="Địa chỉ không được có kí tự đặc biệt";
        return false;
      }

      //valid company
      if(type=="Khách Hàng" && !(/^[A-Za-z0-9 ]+$/.test(company)))
      {
        getEle("#spanCompany").innerHTML="Tên công ty không được có kí tự đặc biệt";
        return false;
      }
      //valid grade
      if(type=="Học Sinh" && (math>10 || math<0))
      {
         getEle("#spanToan").innerHTML="Điểm từ 1 đến 10";
         return false
      }
      if(type=="Học Sinh" && (chemistry>10 || chemistry<0))
      {
         getEle("#spanHoa").innerHTML="Điểm từ 1 đến 10";
         return false
      }
      if(type=="Học Sinh" && (physic>10 || physic<0))
      {
         getEle("#spanLy").innerHTML="Điểm từ 1 đến 10";
         return false
      }
      if(type=="Khách Hàng" && !(reID.test(bill)))
      {
         getEle("#spanBill").innerHTML="Hóa đơn không được có số và kí tự đặc biệt";
         return false
      }
      if(type=="Khách Hàng" && !(/^[A-Za-z0-9 ]+$/.test(review)))
      {
         getEle("#spanReview").innerHTML="Đánh giá không được có kí tự đặc biệt";
         return false
      }
     

      if(type=="Nhân Viên" && profit<0)
      {
         getEle("#spanProfit").innerHTML="Lương lớn hơn 0";
         return false
      }
      if(type=="Nhân Viên" && day<0)
      {
         getEle("#spanDay").innerHTML="ngày lớn hơn 0";
         return false
      }
      return true
}