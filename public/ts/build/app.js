(()=>{var c=document.getElementById("get-trigger"),d=document.getElementById("post-trigger"),l=document.getElementById("put-trigger"),r=document.getElementById("del-trigger"),s=document.getElementById("req-output"),t=document.getElementById("id"),a=document.getElementById("status-code"),n=async e=>{e.ok?a.classList.add("success"):a.classList.remove("success"),a.innerText=`${e.status} - ${e.statusText}`,s.value=JSON.stringify(await e.json(),null,2)};c.addEventListener("click",async()=>{let e=await fetch(`/tasks/${t.value}`);await n(e)});d.addEventListener("click",async()=>{let e=await fetch("/tasks",{method:"POST",body:s.value.replace(/(\r\n|\n|\r)/gm,""),headers:new Headers({"Content-Type":"application/json"})});await n(e)});l.addEventListener("click",async()=>{let e=await fetch(`/tasks/${t.value}`,{method:"PUT",body:s.value.replace(/(\r\n|\n|\r)/gm,""),headers:new Headers({"Content-Type":"application/json"})});await n(e)});r.addEventListener("click",async()=>{if(t.value?confirm("Are you sure you want to delete this task?"):confirm("Are you sure you want to delete all tasks?")){let o=await fetch(`/tasks/${t.value}`,{method:"DELETE"});await n(o)}});})();
