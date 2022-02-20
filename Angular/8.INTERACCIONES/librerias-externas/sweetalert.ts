/**
*!      https://sweetalert.js.org/guides/#getting-started


*! Intalacion
*? npm install sweetalert --save
*? ng serve

*! ejemplo 1. article-new-component.ts
*? import  swal from 'sweetalert';

 onSubmit() {
    this._articleService.create(this.article).subscribe({
      next: (response) => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;
*?          swal(
*?            'Artículo creado',
*?            'El artículo se ha creado correctamente',
*?            'success'
*?          );
          this._router.navigate(['/blog']);
        } else {
          this.status = 'error';
        }
      }, 
      error: (error) => {
        console.log(error);
        this.status = 'error';
      },
    });
  }


*! ejemplo 2. article-edit-component.ts

    onSubmit() {
    this._articleService.update(this.article._id, this.article).subscribe({
      next: (response) => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;

*?          swal(
*?            'Artículo editado',
*?            'El artículo se ha editado correctamente',
  *?          'success'
*?          );

          this._router.navigate(['/blog/articulo', this.article._id]);
        } else {
          this.status = 'error';
        }
      }, 
      error: (error) => {
        console.log(error);
        this.status = 'error';
  *?        swal(
*?            'Falla en la edición',
*?            'El artículo no se ha editado',
*?            'error'
*?          );
      },
    });
  }


*! ejemplo 3. article.component.ts


 delete(id: any) {
*?    swal({
*?      title: '¿Estas seguro?',
*?      text: 'Una vez borrado, no podras recuperar el archivo!',
*?      icon: 'warning',
*?      buttons: [true, true],
*?      dangerMode: true
*?    })//Se ejecuta la promesa
*?    .then((willDelete) => {
*?      if (willDelete) {
        //utilizo el servicio de articulos al metodo delete, y me subscribo al observable
*?        this._articleService.delete(id).subscribe({
*?          next: (response) => {
            //Alerta de borrado con exito
*?            swal('El artículo ha sido borrado!', {
*?              icon: 'success',
            });
            this._router.navigate(['/blog']);
          },
          error: (error) => {
            console.log(error);
            //Alerta de salvar archivo
*?        swal('Error, todo sigue igual!');

            this._router.navigate(['/blog']);
          },
        });
      } else {
  *?      swal('Cancelado, todo sigue igual!');
      }
    });
  }

*/