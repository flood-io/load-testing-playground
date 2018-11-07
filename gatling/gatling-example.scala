import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._

import java.util.Date._
import java.text.SimpleDateFormat._

// Mandatory, you must import Flood libraries
import flood._

class TestPlan extends Simulation {
  // Optional, Tricentis Flood will pass in threads, rampup and duration properties from UI
  val threads   = Integer.getInteger("threads",  100)
  val rampup    = java.lang.Long.getLong("rampup", 30L)
  val duration  = java.lang.Long.getLong("duration", 300L)

  // Mandatory, you must use httpConfigFlood
  val httpConf = httpConfigFlood.baseURL("https://flooded.io/")

  val myScenario = scenario("scenario")
    .during(duration seconds) {

      exec(
        http("Flooded - Home")
          .get("/")
          .check(status.is(200))
      )
      .pause(2)

      .exec(
        http("Flooded - Search")
          .post("/random?f=test123")
          .check(status.is(200))
      )

      .pause(1000 milliseconds, 3000 milliseconds)
    }

  setUp(myScenario.inject(rampUsers(threads) over (rampup seconds))).protocols(httpConf)
}
