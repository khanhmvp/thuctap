function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        let expression = resultField.value
            .replace(/x²/g, '**2')  // Bình phương
            .replace(/√(\d+)/g, 'Math.sqrt($1)')  // Căn bậc hai
            .replace(/(\d+(\.\d+)?)%/g, '($1 * 0.01)');  // Phần trăm

        // Tính toán kết quả một cách an toàn hơn
        resultField.value = new Function('return ' + expression)();
    } catch (error) {
        resultField.value = 'Error';
    }
}
