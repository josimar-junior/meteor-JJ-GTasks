
Template.lista.helpers({
  tarefas:function() {
    return Tarefas.find()
  },
  isCheck:function() {
    if(this.status){
      return 'check'
    }
    return ""
  },
})



Template.lista.events({
  'change input[type=checkbox]': function(e){
    e.preventDefault()
    var id = this._id
    Meteor.call('editarCheckbox', {
        id:id, status: e.currentTarget.checked
        }, function (e, r) {
          if(e) {
            Materialize.toast("Erro!", 3000, 'red')
          }
        })
  },
  'click .removeTarefa':function(e) {
      e.preventDefault
      var id = this._id
      MaterializeModal.confirm({
        title: 'Atenção',
        message: "Deseja realmente excluir a tarefa?",
        closeLabel: 'Cancelar',
        submitLabel: 'Deletar',
        callback: function(error, rtn) {
          if(rtn.submit) {
            Meteor.call("removerTarefa",id, function(error, result) {
              if(error) {
                Materialize.toast("Erro!!", 3000, 'red')
              }
              if(result) {
               Materialize.toast("Tarefa excluída com sucesso!!", 3000, 'blue') 
              }
            })
          }
        }
      })

  },
  'click .editaTarefa' : function(e) {
    e.preventDefault
    Session.set('submitForm', true)
    Session.set('tarefaValue', this);
    var id = this._id
    MaterializeModal.form({
      bodyTemplate: 'editarTarefa',
      title: '<i class="mdi-editor-mode-edit prefix"></i>Editar tarefa',
      closeLabel: 'Cancelar',
      submitLabel: 'Ok',
      callback: function(error, rtn) {
        if(rtn.submit) {

        Meteor.call('editarTarefa', {
        id:id, nome: $('#editTarefa').val()
        }, function (e, r) {
          if(e) {
            Materialize.toast("Erro!", 3000, 'red')
          }
          if(r) {
            Materialize.toast("Editado!", 3000, 'blue') 
          }
        })
        } else {
          if(Session.get('submitForm')) {
            Materialize.toast("Cancelado!", 3000, 'blue')
          }
        }
      }
    })
  }
})

