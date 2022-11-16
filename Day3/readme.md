Passing values from parent to Child Component
Angular
Passing List <app-author-list [AuthorInfo]=authorList ></app-author-list>
Readin in child component @Input() AuthorInfo!: Author[];

Vue
Passing List  <Books :booksdata=books>
  Reading in Child Component
  
 props:{
    booksdata:Array
  }
  
  React
  
  Passing List: 
   const [userList,setList]=useState([]);
  setList([
          ...userList,
          { FirstName: form.FirstName, LastName: form.LastName}

        ]);
  <b>Accessing in Child Component</b>
  function Display(props)
{
return(
  <ul>
    {props.userList.map(artist => (
      <li key={artist.FirstName}>{artist.FirstName}-{artist.LastName}</li>
    ))}
  </ul>
);
