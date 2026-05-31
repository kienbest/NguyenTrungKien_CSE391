function SimpleVariables() {
    const ten = "Nguyễn Trung Kiên";
    const tuoi = 22;
    const queQuan = "Phú Thọ";

    return (
        <div style={{ padding: "20px" }}>
            <h1>Xin chào {ten}!</h1>

            <p>Tuổi: {tuoi}</p>

            <p>Năm sau: {tuoi + 1}</p>

            <p>Quê quán: {queQuan}</p>
        </div>
    );
}

export default SimpleVariables;