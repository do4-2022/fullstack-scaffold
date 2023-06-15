package todo

import org.bson.codecs.configuration.CodecRegistry
import org.bson.codecs.configuration.CodecRegistries.{
  fromProviders,
  fromRegistries
}
import org.mongodb.scala.{MongoClient, MongoCollection}
import org.mongodb.scala.MongoClient.DEFAULT_CODEC_REGISTRY
import org.mongodb.scala.bson.codecs.Macros._

object DB {
  private val databaseURL: String =
    Option(System.getenv("MONGO_URL"))
      .getOrElse("mongodb://root:root@localhost:27018")

  private val customCodecs: CodecRegistry =
    fromProviders(classOf[Todo])

  private val codecRegistry: CodecRegistry =
    fromRegistries(customCodecs, DEFAULT_CODEC_REGISTRY)

  private val database =
    MongoClient(databaseURL)
      .getDatabase("todoapp")
      .withCodecRegistry(codecRegistry)

  val todosCollection: MongoCollection[Todo] =
    database.getCollection[Todo]("todos")
}
