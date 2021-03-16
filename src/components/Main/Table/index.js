// Componentes
import RowTable from './RowTable'

function Table(props) {
    return (
        <table className = "table">
            <thead>
                <tr>
                    <th scope = "col">#</th>
                    <th scope = "col">Name</th>
                    <th scope = "col">Description</th>
                    <th scope = "col">Price</th>
                    <th scope = "col">Category</th>
                    <th scope = "col">Colour</th>
                    <th scope = "col">Size</th>
                    <th scope = "col">Stock</th>
                </tr>
            </thead>
            <tbody>
                <RowTable row = '1' name = 'Suculenta' description = 'Lorem ipsum Lorem ipsum Lorem ipsum' price = '$1000' category = 'Plantas' colour = 'N/A' size = 'S' stock = '10'/>
                <RowTable row = '2' name = 'Suculenta 2' description = 'Lorem ipsum Lorem ipsum Lorem ipsum' price = '$3000' category = 'Plantas' colour = 'N/A' size = 'L' stock = '15'/>
                <RowTable row = '3' name = 'Suculenta 3' description = 'Lorem ipsum Lorem ipsum Lorem ipsum' price = '$2000' category = 'Plantas' colour = 'N/A' size = 'M' stock = '20'/>
                <RowTable row = '4' name = 'Taller de suculentas' description = 'Lorem ipsum Lorem ipsum Lorem ipsum' price = '$5000' category = 'Workshops' colour = 'N/A' size = 'N/A' stock = '15'/>
                <RowTable row = '5' name = 'Taller de suculentas' description = 'Lorem ipsum Lorem ipsum Lorem ipsum' price = '$5000' category = 'Workshops' colour = 'N/A' size = 'N/A' stock = '15'/>
                <RowTable row = '6' name = 'Taller de suculentas' description = 'Lorem ipsum Lorem ipsum Lorem ipsum' price = '$5000' category = 'Workshops' colour = 'N/A' size = 'N/A' stock = '15'/>
                <RowTable row = '7' name = 'Taller de suculentas' description = 'Lorem ipsum Lorem ipsum Lorem ipsum' price = '$5000' category = 'Workshops' colour = 'N/A' size = 'N/A' stock = '15'/>
                <RowTable row = '8' name = 'Taller de suculentas' description = 'Lorem ipsum Lorem ipsum Lorem ipsum' price = '$5000' category = 'Workshops' colour = 'N/A' size = 'N/A' stock = '15'/>
                <RowTable row = '9' name = 'Taller de suculentas' description = 'Lorem ipsum Lorem ipsum Lorem ipsum' price = '$5000' category = 'Workshops' colour = 'N/A' size = 'N/A' stock = '15'/>
                <RowTable row = '10' name = 'Taller de suculentas' description = 'Lorem ipsum Lorem ipsum Lorem ipsum' price = '$5000' category = 'Workshops' colour = 'N/A' size = 'N/A' stock = '15'/>
                
            </tbody>
        </table>
    );
}

export default Table;
