

/////////////TO SEND DATA TO BACKEND////////////////////////////

let fields = ["date", "month", "year", "hour", "minute", "seconds", "timeRefrence", "placeOfBirth", "rashi", "nakshatra", "selfReligion", "createdBy",
"caste", "subCaste", "gotra", "manglik", "selfEducation", "collegeName", "employedIn", "companyName", "fathersName", "fathersOccupation",
"mothersName", "mothersOccupation", "numOfBrothers", "numOfSisters", "numOfBrothersMarried", "numOfSistersMarried", "contactNum", "addressL1", "addressL2", "selfMaritalStatus", "gender", "motherTongue", "email" ]

let obj = {};
let fileData = null;
let newFetchUrl='';
let mimeType;
let imagePreviewUrl;

let biodata_data = function() {

   let obj = {}
   for(let i=0; i<fields?.length; i++){
       obj[fields[i]] = document.getElementById(fields[i])?.value
   }


   let full_name = document.querySelector('#name').value
   let cname = full_name.trim().split(" ")
   let fname
   let lname
   if (cname.length > 1) { 
       lname = cname.pop()
       fname = cname.join(" ")
   }else{
       fname = cname[0]
       lname = undefined
   }
   
   

let selfHeight = document.querySelector('#selfHeight').value 

let new_obj = {}

if(selfHeight == '4ft 5in'){
    new_obj['selfHeight'] = 53
} else if(selfHeight == '4 ft 6 in'){
    new_obj['selfHeight'] = 54
} else if( selfHeight == '4 ft 7 in'){
    new_obj['selfHeight'] = 55
} else if(selfHeight == '4 ft 8 in'){
    new_obj['selfHeight'] = 56
} else if(selfHeight == '4 ft 9 in'){
    new_obj['selfHeight'] = 57
} else if(selfHeight == '4 ft 10 in'){
    new_obj['selfHeight'] = 58
} else if(selfHeight == '4 ft 11 in'){
    new_obj['selfHeight'] = 59
} else if(selfHeight == '5 ft 00 in'){
    new_obj['selfHeight'] = 60
} else if(selfHeight == '5 ft 01 in'){
    new_obj['selfHeight'] = 61
} else if(selfHeight == '5 ft 02 in'){
    new_obj['selfHeight'] = 62
} else if(selfHeight == '5 ft 03 in'){
    new_obj['selfHeight'] = 63
} else if(selfHeight == '5 ft 04 in'){
    new_obj['selfHeight'] = 64
} else if(selfHeight == '5 ft 05 in'){
    new_obj['selfHeight'] = 65
} else if(selfHeight == '5 ft 06 in'){
    new_obj['selfHeight'] = 66
} else if(selfHeight == '5 ft 07 in'){
    new_obj['selfHeight'] = 67
} else if(selfHeight == '5 ft 08 in'){
    new_obj['selfHeight'] = 68
} else if(selfHeight == '5 ft 09 in'){
    new_obj['selfHeight'] = 69
} else if(selfHeight == '5 ft 10 in'){
    new_obj['selfHeight'] = 70
} else if(selfHeight == '5 ft 11 in'){
    new_obj['selfHeight'] = 71
} else if(selfHeight == '6 ft 00 in'){
    new_obj['selfHeight'] = 72
} else if(selfHeight == '6 ft 01 in'){
    new_obj['selfHeight'] = 73
} else if(selfHeight == '6 ft 02 in'){
    new_obj['selfHeight'] = 74
} else if(selfHeight == '6 ft 03 in'){
    new_obj['selfHeight'] = 75
} else if(selfHeight == '6 ft 04 in'){
    new_obj['selfHeight'] = 76
} else if(selfHeight == '6 ft 05 in'){
    new_obj['selfHeight'] = 77
}

let selfIncomeRange = document.querySelector('#annualIncome')
   
if (selfIncomeRange.value == '0 - 2 Lpa'){
  new_obj['selfIncomeFrom'] = 0
  new_obj['selfIncomeTo'] = 200000
} else if(selfIncomeRange.value == '2 - 4 Lpa'){
  new_obj['selfIncomeFrom'] = 200000
  new_obj['selfIncomeTo'] = 400000
} else if(selfIncomeRange.value == '4 - 7 Lpa'){
  new_obj['selfIncomeFrom'] = 400000
  new_obj['selfIncomeTo'] = 700000
} else if(selfIncomeRange.value == '7 - 10 Lpa'){
  new_obj['selfIncomeFrom'] = 700000
  new_obj['selfIncomeTo'] = 1000000
} else if(selfIncomeRange.value == '10 - 15 Lpa'){
  new_obj['selfIncomeFrom'] = 1000000
  new_obj['selfIncomeTo'] = 1500000
} else if(selfIncomeRange.value == '15 - 20 Lpa'){
  new_obj['selfIncomeFrom'] = 1500000
  new_obj['selfIncomeTo'] = 2000000
} else if(selfIncomeRange.value == '20 - 30 Lpa'){
  new_obj['selfIncomeFrom'] = 2000000
  new_obj['selfIncomeTo'] = 3000000
} else if(selfIncomeRange.value == '30 - 50 Lpa'){
  new_obj['selfIncomeFrom'] = 3000000
  new_obj['selfIncomeTo'] = 5000000
} else if(selfIncomeRange.value == '50+ Lpa'){
  new_obj['selfIncomeFrom'] = 5000000
  new_obj['selfIncomeTo'] = 10000000
}
   
   for(let item in obj){
    if (obj[item] !== "" && obj[item]){
        new_obj[item] = obj[item]
    }
   }

//    Object.assign({...obj, imgaeUrl: imagePreviewUrl});
   new_obj['imageUrl']=imagePreviewUrl;
   new_obj['firstName'] = fname;
   new_obj['lastName'] = lname
   console.log("Onj", new_obj)

   let data = JSON.stringify(      
       new_obj
   );
 
//    console.log("Helllo World", obj)

   let request = new XMLHttpRequest();
   let endPoint = new URL(`https://maverick-biodata-sj6eib36ga-el.a.run.app`); 
   let url = endPoint.toString();
   request.open('POST', url, true)
   request.setRequestHeader("Content-Type", "application/json");
   //request.setRequestHeader("request-id", `${generateUUID()}`)
   request.send(data);
 }
 document.querySelector('#premium-biodata-form').addEventListener('submit', biodata_data)

////////////////////////////////////////SEND DATA TO BACKEND ENDS/////////////////////////////////////////////////////////


//////////////////////////////////TO SEND PHOTO TO BACKEND//////////////////////////////////////////////


let photo_upload = function(inputData) {
  console.log(inputData.target.files[0])
  let fileUrl = document.querySelector('.w-file-upload-input').value
  let finalName = fileUrl.substring(fileUrl.lastIndexOf('/')+13);
  
  fileData = new File([inputData.target.files[0]], finalName, {type: "text/json;charset=utf-8"});
  
  let data = JSON.stringify({
    "filePath": `${finalName}`
  })

  let request = new XMLHttpRequest();
  let endPoint = new URL(`https://maverick-biodata-sj6eib36ga-el.a.run.app`); 
  let url = endPoint.toString();
  request.open('PATCH', url, true)
  request.setRequestHeader("Content-Type", "application/json");

  request.onload = function() {
    const response= JSON.parse(this.response)
    mimeType = response.mime
    imagePreviewUrl = response.fileRenderUrl;
    newFetchUrl=response.fileUploadUrl;
   
  }
  request.send(data); 
}

document.querySelector('.w-file-upload-input').addEventListener('change', (data)=>photo_upload(data))


let photo_submit=()=>{
  console.log("submitted data", newFetchUrl, fileData, mimeType, imagePreviewUrl )
 
  fetch(newFetchUrl, {
    method: 'PUT',
    headers: {
        'Content-Type': `${mimeType}`
    },
    body: fileData
});
}

///////////////////////////////////////PHOTO SENDING TO BACKEND ENDS/////////////////////////////////////////////////////////////


////////////////////////////////TO GENERATE PDF////////////////////////////////
  
  document.querySelector('#premium-biodata-form').addEventListener('submit', photo_submit)

  ////////////////////////////////////PDF GENERATION ENDS///////////////////////////////////////////////////////////