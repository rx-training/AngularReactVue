<div><b>Passing values from Parent to Child Component</b>
<b>Angular</b>
<b>Passing List</b>
</div>
<div>
<app-author-list [AuthorInfo]=authorList ></app-author-list>
</div>
<div>
<b>Reading in child component</b> @Input() AuthorInfo!: Author[];
</div>
<div>
<b>Vue</b>
</div>
<div>
<b>Passing List</b>
</div>
<div>
<Books :booksdata=books>
</div>
<div>
<b>Reading in Child Component</b>
  </div>
  <div>
 props:{
    booksdata:Array
  }
  </div>
  <div>
 <b>React</b>
  </div>
  <div>
<b>Passing List</b>
</div>
<div>
   <Display userList={userList} ></Display>
   </div>
   <div>
  <b>Accessing in Child Component</b>
  </div>
  <div>
  function Display(props)
{
return(
  <ul>
    {props.userList.map(artist => (
      <li key={artist.FirstName}>{artist.FirstName}-{artist.LastName}</li>
    ))}
  </ul>
);
</div>
