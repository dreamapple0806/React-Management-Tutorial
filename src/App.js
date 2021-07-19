import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [{
  'id': 1,
  'image': 'http://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '200101',
  'gender': '남자',
  'job': '직장인'
},
{
  'id': 2,
  'image': 'http://placeimg.com/64/64/2',
  'name': '도라이',
  'birthday': '200202',
  'gender': '여자',
  'job': '대학생'
},
{
  'id': 3,
  'image': 'http://placeimg.com/64/64/3',
  'name': '유재석',
  'birthday': '200303',
  'gender': '남자',
  'job': '택시기사'
}]

function App() {
  return (
    <div>
      <Customer 
        id={customers[0].id}
        image={customers[0].image}
        name={customers[0].name}
        birthday={customers[0].birthday}
        gender={customers[0].gender}
        job={customers[0].job}
      />
      <Customer 
        id={customers[1].id}
        image={customers[1].image}
        name={customers[1].name}
        birthday={customers[1].birthday}
        gender={customers[1].gender}
        job={customers[1].job}
      />
      <Customer 
        id={customers[2].id}
        image={customers[2].image}
        name={customers[2].name}
        birthday={customers[2].birthday}
        gender={customers[2].gender}
        job={customers[2].job}
      />
      ============================
      같은 기능 map 써서 반복문으로 출력하기
      ============================
      {
        customers.map(c => {
          return (<Customer
              id={c.id} 
              image={c.image} 
              name={c.name} 
              birthday={c.birthday} 
              gender={c.gender} 
              job={c.job} />
          );
        })
      }
    </div>
  );
}

export default App;


