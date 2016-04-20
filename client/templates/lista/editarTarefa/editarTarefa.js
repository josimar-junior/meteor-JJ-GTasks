Template.editarTarefa.helpers({
	tarefaValue: function () {
		return Session.get('tarefaValue').nome
	}
})

Template.editarTarefa.events({
	'submit #editarTarefa': function(e) {
		e.preventDefault()
		var id = Session.get('tarefaValue')._id
		Meteor.call('editarTarefa', {
			id:id, nome: e.target.editTarefa.value
		}, function (e, r) {
			if(e) {
				Materialize.toast("Erro!", 3000, 'red')
			}
			if(r) {
				Materialize.toast("Editado!", 3000, 'blue')	
			}
		})
		Session.set('submitForm', false)
		MaterializeModal.close()
		
	}
})