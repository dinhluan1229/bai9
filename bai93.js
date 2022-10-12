function Kiemtra(){
    let weight = document.getElementById('cannang').value;
    let height = document.getElementById('chieucao').value;
    let bmi = weight/(height**2);
    if (bmi<18.5)
        document.getElementById('result').innerHTML = "Bạn đang thiếu cân";
    else if (bmi<25)
        document.getElementById('result').innerHTML = "Bạn bình thường";
    else if (bmi<30)
        document.getElementById('result').innerHTML = "Bạn đang thừa cân";
    else if (bmi>30)
        document.getElementById('result').innerHTML = "Bạn đang bị béo phì";
}