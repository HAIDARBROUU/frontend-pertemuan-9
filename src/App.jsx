import Greeting from './components/Greeting';
function App() {
 return (
 <div>
 <h1>React Frontend - Pertemuan 9</h1>
 <Greeting name="Mahasiswa" />
 </div>
 );
}
export default App;
import ProductList from './components/ProductList';
function App() {
 return (
 <div>
 <h1>React Frontend - Pertemuan 9</h1>
 <Greeting name="Mahasiswa" />
 <ProductList />
 </div>
 );
}
import Mahasiswa from './components/Mahasiswa';
import PostList from './components/PostList';
function App() {
 return (
 <div>
 <h1>React Frontend - Pertemuan 9</h1>
 <Greeting name="Mahasiswa" />
 <ProductList />
 <Mahasiswa nama="Haidar" npm="12345" prodi="Teknik
Informatika" />
 <PostList />
 </div>
 );
}