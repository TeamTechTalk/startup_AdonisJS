import Tema from 'App/Models/Tema'

export default class TemasController {
  public async index() {
    const tema = await Tema.all()
    return tema
  }

  public async show({ params }) {
    const tema = await Tema.findOrFail(params.id)
    return tema
  }

  public async store({ request }) {
    const data = request.only(['descricao'])
    const tema = await Tema.create(data)
    return tema
  }

  public async update({ params, request }) {
    const tema = await Tema.findOrFail(params.id)
    if (tema) {
      tema.merge(request.only(['descricao']))
      tema.save()
    }
    return tema
  }

  public async destroy({ params }) {
    const tema = await Tema.findOrFail(params.id)
    if (tema) {
      tema.delete()
      tema.save()
      return { msg: `Tema ${params.id} foi excluído com sucesso!` }
    }
  }
}
