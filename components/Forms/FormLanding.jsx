import React from 'react'

export default function FormLanding() {
  return (
    <div>
       <h2 className="font-semibold text-3xl my-auto" id='Title'> Attention! </h2>
        <div className="mt-12" id='Description'>
          <p>
            Mohon perhatian bahwa pengisian data pada formulir berikut ini dimaksudkan untuk menggambarkan perbandingan komposisi kemampuan individu dan bukan sebagai nilai yang sesuai dengan standar global. Mohon isikan nilai sesuai dengan perbandingan komposisi kemampuan Anda dan sesuai dengan rentang yang Anda miliki. Sebagai contoh, jika Anda memiliki kemampuan sprint yang jauh lebih baik daripada heading, Anda dapat mengisikan nilai 90 untuk sprint dan nilai 50 untuk heading. Terima kasih atas perhatiannya.
          </p>
          <br></br>
          <i>
            Please be informed that filling out the data in the following form is intended to illustrate the comparison of abilities&apos; composition and does not represent values aligned with global standards. Kindly input values according to your own composition comparison and within the range you possess. For example, if you have a significantly better sprint ability compared to heading, you may input a value of 90 for sprint and 50 for heading. Thank you for your attention
          </i>
        </div>
    </div>
  )
}
