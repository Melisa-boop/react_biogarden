function RowTable(props) {
    return (
        <tr>
            <th scope = "row">{ props.row }</th>
            <td>{ props.title }</td>
            <td>{ props.description }</td>
            <td>{ "$" + props.price }</td>
            <td>{ props.category }</td>
            <td>{ props.colour }</td>
            <td>{ props.size }</td>
            <td>{ props.stock }</td>
        </tr>
    );
}

export default RowTable;
