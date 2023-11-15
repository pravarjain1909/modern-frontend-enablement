// tags and consts
const addBtn = document.getElementById('addBtn');
const startedSectiontag = document.getElementById('startedSection');
const startedmaintag= document.getElementById('startMain');
const saveBtntag = document.getElementById('save')

// variables;

var addIncrement = 0;
var addlinkdivHtml ="";
var dataarr = [];




// add new link btn handdler
addBtn.addEventListener('click' , (e)=>{
    e.preventDefault;
    startedSectiontag.classList.add('hidden');
    
    addLinkDiv(addIncrement++);

    

    }


)

saveBtntag.addEventListener('click' , onSaveButtonHandler);
function onSaveButtonHandler(){
    const inptag = document.getElementsByTagName('input');
    const selectag  = document.getElementsByTagName('select');
    
    for (let index = 0; index < inptag.length; index++) {
       let link =  inptag[index].value;
       var selectedIndex =  selectag[index].selectedIndex;
       let platform = selectag[index].options[selectedIndex].value;
       
      if((link.length>0 ) && ( platform.length>0)  ){
        console.log('hello ji');
      dataarr[index] = new data(link , platform);
      }
    }
    
    console.log(dataarr);
}


function createButton(color , text , icon , pre){

}


function addLinkDiv(number){

  if(number>1){
      console.log(startedmaintag.innerHTML)
  }
    number+=1;
     addlinkdivHtml =  addlinkdivHtml+` <div class="w-full text-[#737373] bg-[#fff] px-4 pt-4 mt-10 ">
<div class="flex justify-between">
  <p>Link${" "}#${" "+number}</p>
  <button>Remove</button>
</div>
<p class="p-3 text-[8px] mt-2">Platform</p>

<select
  name="data"
  id="sel${number}"
  class="w-full border-2 border-solid py-3 mt-1"
>
  <option value="">Select</option>
  <option value="github">Github</option>
  <option value="youtube">Youtube</option>
</select>
<div class="mt-2">
  <label for="data">Link</label>
  <input
    name="data"
    id="inp${number}"
    placeholder="Link"
    class="w-full border-2 border-solid py-3 mt-1"
    oninput="test(${--number})"}
  />
 
</div>
</div>`

 startedmaintag.innerHTML=addlinkdivHtml;
}

function test(e){
  
 
}




function data(op , link , idx){
  this.idx = idx ;
  this.option = op;
  this.link = link;
}
