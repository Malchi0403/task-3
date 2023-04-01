function takeData() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    // check validation

    if (name == "") {
        return alert("Nama tidak boleh kosong")
    } else if (email == "") {
        return alert("Email tidak boleh Kosong")
    }
    else if (phone == "") {
        return alert("Nomor telfon harus di isi")
    }
    else if (subject == "") {
        return alert("Subject harus di pilih")
    }
    else if (message == "") {
        return alert("harap isikan pesan anda")
    }

    const destination = "misaeltimpolas04@gmail.com"
    let a = document.createElement("a")
    a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${destination}&su=${subject}&body= Halo nama saya ${name} , saya ingin ${message}, bisakah anda menghubungi saya di nomor tersebut ${phone}`
    a.click()

    let data = {
        nama: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
    }

    console.log(data)
}